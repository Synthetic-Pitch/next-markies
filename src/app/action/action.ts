
'use server'
import MongoDbConnect from "../../../lib/mongoDb"
import VoucherModel from "../model/voucher";
import cloudinary from "../../../lib/cloudinary";



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