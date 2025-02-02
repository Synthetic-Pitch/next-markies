import { NextRequest, NextResponse } from "next/server"
import MongoDbConnect from '../../../../lib/mongoDb'


export async function POST (req:NextRequest){
    MongoDbConnect();
    try{
        const {name} = await req.json();
        return NextResponse.json({name},{status:202})
    }
    catch(err){
        console.error(err)
        return NextResponse.json({message:'Error posting Data'},{status:500})
    }
}