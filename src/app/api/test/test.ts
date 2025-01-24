import { NextRequest, NextResponse } from "next/server";



export async function POST (request:NextRequest){
    try{
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if(!file){
            return NextResponse.json({message:'no provided file'},{status:400});
        }
        
        return NextResponse.json({file},{status:201});
        
    }catch(err){
        console.error('Error uploading file:', err);
    }
}

