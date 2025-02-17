
'use server'
import MongoDbConnect from "../../../lib/mongoDb"
import VoucherModel from "../model/voucher";
import cloudinary from "../../../lib/cloudinary";
import { revalidatePath } from "next/cache";



export async function VoucherAction(formdata:FormData){
    await MongoDbConnect();
    let success
    const discount = formdata.get('discount') as string
    const image = formdata.get('voucherImage') as File
    const shippingFree = formdata.get('hasShipping')  === 'on' ? true : false
    const stocks = formdata.get("stocks") as string
    
    
    if(discount === null || image === null || stocks.length === 0){
        success = false
        console.log(formdata);
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const sendToClaudinary = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "Voucher", // Replace with your desired folder name
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        
        // Pipe the file buffer to the upload stream
        uploadStream.end(buffer);
    });

    await VoucherModel.create({
        url:(sendToClaudinary as {secure_url : string}).secure_url,
        discount:parseFloat(discount),
        freeShipping:shippingFree,
        stocks:parseInt(stocks)
    })
    success = true

    
    return {
        success,
    }
}

export async function VoucherGET(){
    await MongoDbConnect();
    const vouchers = await VoucherModel.find({}).sort({createdAt:-1}).limit(50);
    return vouchers
}


type VoucherType = {
    url: string;
    discount: number;
    freeShipping: boolean;
    stocks: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export async function VoucherClaim(id: string) {
    try {
        await MongoDbConnect();
        const VoucherID = await VoucherModel.findById(id) as VoucherType;
        
        if(VoucherID.stocks <= 1 || !VoucherID){
            await VoucherModel.findByIdAndDelete(id)
            revalidatePath('/vouchers');
            return{succes:false,message:'Voucher out of stock'}
        }
        
        const updatedVoucher = await VoucherModel.findOneAndUpdate(
            {
                _id: id
            },
            { $inc: { stocks: -1 } },
            { 
                new: true,
                runValidators: true 
            }
        ) as VoucherType;
        
        if (!updatedVoucher) {
            return { success: false, message: 'Voucher not found or out of stock' };
        }
        
        
        const toPlain = {
            url:VoucherID.url,
            disount:VoucherID.discount,
            freeShipping:VoucherID.freeShipping,
        }

        revalidatePath('/vouchers');

        return { 
            success: true, 
            message: 'Voucher claimed successfully',
            toPlain
        };

    } catch (error) {
        console.error('Error claiming voucher:', error);
        return { success: false, message: 'Failed to claim voucher' };
    }
}