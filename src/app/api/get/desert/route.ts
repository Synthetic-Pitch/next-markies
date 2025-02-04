import { NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";
import redis from '../../../../../lib/redis';


export async function GET() {
    await MongoDbConnect();
    try{
        const cacheDeset = await redis.get('desert');
        // 1️⃣ Check if cached in Redis
        if(cacheDeset){
            console.log('returning cache data');
            return NextResponse.json(JSON.parse(cacheDeset),{status:200});
        }
        // 2️⃣ Fetch from MongoDB if not cached
        const foods = await FoodsModel.find();
        // 3️⃣ Store result in Redis (Cache for 60 seconds)
        await redis.set("foods", JSON.stringify(foods));
        await redis.expire("foods", 60);
        return NextResponse.json(foods,{status:200});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({message:"error with server",err},{status:500});
    }
};