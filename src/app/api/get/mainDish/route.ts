import { NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";

export async function GET() {
    await MongoDbConnect();
    try{
        const foods = await FoodsModel.find({category:"mainDish"})

        return NextResponse.json(foods,{status:200});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({message:"error with server",err},{status:500});
    }
}