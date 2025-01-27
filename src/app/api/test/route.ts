import { NextRequest,NextResponse } from "next/server";
import cloudinary from "../../../../lib/cloudinary";



export async function POST(req: NextRequest){
  try{
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if(!file){
      return NextResponse.json({message:'No file uploaded'},{status:400})
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Upload to Cloudinary using Promise
    const result = await new Promise((resolve, reject) => {
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
    return NextResponse.json({
      message: 'file uploaded to cloudinary',
      fileDetails: {
          name: file.name,
          size: file.size,
          type: file.type,
          cloudinaryUrl: (result as { secure_url: string }).secure_url // The URL from Cloudinary
      }
  }, { status: 201 });
  } 
  catch(err){
    console.error(err)
    return NextResponse.json({message: "Internal Server Error", err})
  }
}