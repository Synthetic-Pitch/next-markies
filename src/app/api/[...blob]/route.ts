import { NextRequest, NextResponse } from "next/server";



export async function GET(){
    try{
        return NextResponse.json({message:'ok'})
    }
    catch(err){
        return NextResponse.json({message:'err',err})
    }
}

export async function POST(req:NextRequest){
    try{
        const data = await req.json();
        return NextResponse.json(data,{status:201})
    }
    catch(err){
        return NextResponse.json({message:'err',err})
    }
}