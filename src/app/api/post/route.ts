import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../../lib/cloudinary";
import MongoDbConnect from '../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";
import { revalidateTag } from "next/cache";
// import redis from '../../../../lib/redis';  // Redis connection

// const RATE_LIMIT = 5;  // Max number of requests per minute (you can adjust this number)
// const RATE_LIMIT_WINDOW = 60;  // Time window in seconds (60 seconds = 1 minute)

export async function POST(req: NextRequest) {
    // const ip = req.headers.get('x-forwarded-for') || 'default-ip'; // Use the user's IP or identifier for rate limiting
    
    // // 1️⃣ Check if the user has exceeded the rate limit
    // const currentCount = await redis.get(`rate_limit:${ip}`);
    
    // if (currentCount && parseInt(currentCount) >= RATE_LIMIT) {
    //     // 2️⃣ If rate limit exceeded, return a rate-limited error
    //     return NextResponse.json({
    //         message: 'Too many requests. Please try again later.',
    //     }, { status: 429 });  // 429 Too Many Requests
    // }
    
    await MongoDbConnect();
    try {
        const formData = await req.formData();
        
        const name = formData.get("name") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;
        const imageFile = formData.get("image") as File; // Get the image file
        const category = formData.get("category") as string;
        
        if(!imageFile || !name || !price || !description || !category){
            return NextResponse.json({message:"all requirements are required"},{status:400});
        }
        
        // Convert image file to a Base64 Blob URL
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // posting the image buffer to Cloudinary
        const sendToClaudinary = await new Promise((resolve, reject) => {
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
        });

        // Uploading the Cloudinary URL and product content to MongoDB
        const Model = await FoodsModel.create({
            name: name,
            price: price,
            description: description,
            url: (sendToClaudinary as { secure_url: string }).secure_url, // The URL from Cloudinary
            category: category
        });
        
        
        
        // // 3️⃣ Increment the request count in Redis
        // await redis.incr(`rate_limit:${ip}`);
        
        // // 4️⃣ Set the expiry time for the rate limit key (1 minute)
        // await redis.expire(`rate_limit:${ip}`, RATE_LIMIT_WINDOW);

        return NextResponse.json({ Model }, { status: 201,headers:{
            "Cache-Control": "no-store",
        }});

    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ message: "Error processing data" }, { status: 500 });
    }
    finally{
        revalidateTag('mainDish')
    }
}
