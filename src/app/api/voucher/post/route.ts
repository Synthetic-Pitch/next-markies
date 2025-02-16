import { NextRequest, NextResponse } from "next/server";
import MongoDbConnect from '../../../../../lib/mongoDb'
import cloudinary from "../../../../../lib/cloudinary";
import VoucherModel from "@/app/model/voucher";


export async function POST(req: NextRequest) {
    await MongoDbConnect();
    try{
        const data = await req.formData();
        const discount = parseFloat(data.get('discount') as string); 
        const url = data.get('url') as File;
        const isFreeShipping = data.get('isFreeShipping') as string === 'true';
        
        if(!discount || !url){
            return NextResponse.json({message:"all requirements are required"},{status:400})
        }
        
        const arrayBuffer = await url.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // posting the image buffer to Cloudinary
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
        
        const newVouhcer = await VoucherModel.create({
            url:(sendToClaudinary as { secure_url: string }).secure_url, // The URL from Cloudinary
            discount:discount,
            freeShipping:isFreeShipping
        })
        
        return NextResponse.json(newVouhcer,{status:201})
    }
    catch(err){
        console.error(err);
        return NextResponse.json('Error with server', {status:500})
    }
}