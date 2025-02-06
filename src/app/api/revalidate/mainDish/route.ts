import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";


export async function POST(req:NextRequest){
    try{
        const { path } = await req.json();
        revalidatePath(path || '/src/app/components/product-map/mainDish.tsx');
        return NextResponse.json({message:"revalidated succesfully!"},{status:200})
    }
    catch(err){
        return NextResponse.json({message:"Error validation",err},{status:500})
    }
}