import { NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";
import redis from "../../../../../lib/redis";

export async function GET() {
    await MongoDbConnect();

    try {
        const cachedKey = 'mainDish';
        
        // Get the total count of beverages in database
        const currentCount = await FoodsModel.countDocuments({ category: "mainDish" });
        
        // Get the cached count (if exists)
        const cachedCount = await redis.get(`${cachedKey}_count`);
        
        // Check if data is cached and counts match
        const cachedResult = await redis.get(cachedKey);
        
        // If cache exists and count matches, use cached data
        if (cachedResult && cachedCount && Number(cachedCount) === currentCount) {
            return NextResponse.json({
                message: "Data retrieved from cache",
                data: JSON.parse(cachedResult),
                fromCache: true,
                totalItems: currentCount
            }, {status: 200});
        }
        
        // If no cache or count mismatch, fetch fresh data
        const beverages = await FoodsModel.find({category: "mainDish"}).limit(50);
        
        // Update cache with new data and count
        await redis.set(cachedKey, JSON.stringify(beverages), { EX: 3600 });
        await redis.set(`${cachedKey}_count`, currentCount, { EX: 3600 });
        
        return NextResponse.json({
            message: 'Data fetched from database and cached',
            data: beverages,
            fromCache: false,
            totalItems: currentCount
        }, {status: 200});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({
            message: "Error with server",
            error: (err instanceof Error) ? err.message : 'Unknown error'
        }, {status: 500});
    }
}