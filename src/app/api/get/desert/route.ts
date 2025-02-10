import { NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";


export async function GET() {
    await MongoDbConnect();
    
    try {
        const beverages = await FoodsModel.find({category: "desert"}).limit(20);
        const response = NextResponse.json(beverages, { status: 200 });
        return response;
    }
    
    catch(err){
        console.error(err);
        return NextResponse.json({
            message: "Error with server",
            error: (err instanceof Error) ? err.message : 'Unknown error'
        }, {status: 500});
    }
}