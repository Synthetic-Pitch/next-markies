
import { NextRequest, NextResponse } from "next/server";

import cloudinary from "../../../../lib/cloudinary";
import MongoDbConnect from '../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";





export async function GET(){
   
    return NextResponse.json({message:"null"})
}

export async function POST(req: NextRequest) {
    await MongoDbConnect();
    try {
        const formData = await req.formData();

        const name = formData.get("name") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;
        const imageFile = formData.get("image") as File; // Get the image file
        const category = formData.get("category") as string;
        
        if(!imageFile || !name || !price || !description || !category){
            return NextResponse.json({message:"all requirements are required"},{status:400})
        }
        
        
        // Convert image file to a Base64 Blob URL
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // posting the image buffer to Claudinary
        const sendToClaudinary = await new Promise((resolve,reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: "Foods", // Replace with your desired folder name
                },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            );
            
            // Pipe the file buffer to the upload stream
            uploadStream.end(buffer);
                    
        })
        
        // uploading the claudinary url and product content to MongoDB
        const Model = await FoodsModel.create({
            name:name,
            price:price,
            description:description,
            url:(sendToClaudinary as { secure_url: string }).secure_url // The URL from Cloudinary
        })

        return NextResponse.json({Model},{status:201});

    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ message: "Error processing data" }, { status: 500 });
    }
}