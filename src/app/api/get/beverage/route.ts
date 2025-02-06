import { NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";
import redis from "../../../../../lib/redis";

const CACHE_KEY = 'beverages';

export async function GET() {
    await MongoDbConnect();
    
    try {
        // Step 1: Try getting data from Redis cache
        const cachedData = await redis.get(CACHE_KEY);

        if (cachedData) {
            // Step 2: Fetch fresh data in the background while returning cached data
            refreshCache();
            return NextResponse.json(JSON.parse(cachedData)); 
        }

        // Step 3: If no cache, fetch fresh data and store it
        return await fetchAndCacheFreshData();

    } catch (err) {
        console.error(err);
        return NextResponse.json({
            message: "Error with server",
            error: (err instanceof Error) ? err.message : 'Unknown error'
        }, { status: 500 });
    }
}

// Helper function to fetch fresh data and cache it
async function fetchAndCacheFreshData() {
    const beverages = await FoodsModel.find({ category: "beverage" }).limit(50).lean();

    // Correctly call Upstash Redis with proper argument order
    await redis.set(CACHE_KEY, JSON.stringify(beverages));
    await redis.expire(CACHE_KEY, 30); // Set expiration time separately

    return NextResponse.json(beverages);
}

// Helper function to refresh cache in the background
async function refreshCache() {
    fetchAndCacheFreshData().catch(err => console.error("Failed to refresh cache:", err));
}
