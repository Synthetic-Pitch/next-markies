import { NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDb';
import FoodsModel from "@/app/model/foods";
import redis from "../../../../../lib/redis";

export const config = { runtime: "edge" };

// Initialize connection outside of handler
let isConnected = false;

export async function GET() {
    // Connect only if not already connected
    if (!isConnected) {
        await MongoDbConnect();
        isConnected = true;
    }

    try {
        const cachedKey = 'mainDish';
        const CACHE_DURATION = 3600; // 1 hour in seconds
        
        // Parallel execution of cache checks
        const [cachedResult, cachedCount] = await Promise.all([
            redis.get(cachedKey),
            redis.get(`${cachedKey}_count`)
        ]);

        // If cache exists, return immediately
        if (cachedResult && cachedCount) {
            return NextResponse.json({
                message: "Data retrieved from cache",
                data: JSON.parse(cachedResult),
                fromCache: true,
                totalItems: Number(cachedCount)
            }, { status: 200 });
        }
        
        // Parallel execution of MongoDB queries
        const [mainDishes, currentCount] = await Promise.all([
            FoodsModel.find({ category: "mainDish" })
                .select('-__v') // Exclude unnecessary fields
                .lean() // Convert to plain JavaScript objects
                .limit(50),
            FoodsModel.countDocuments({ category: "mainDish" })
        ]);

        // Parallel cache updates
        await Promise.all([
            redis.set(cachedKey, JSON.stringify(mainDishes), { 
                EX: CACHE_DURATION,
                NX: true // Only set if not exists
            }),
            redis.set(`${cachedKey}_count`, currentCount, { 
                EX: CACHE_DURATION,
                NX: true
            })
        ]);

        return NextResponse.json({
            message: 'Data fetched from database and cached',
            data: mainDishes,
            fromCache: false,
            totalItems: currentCount
        }, { status: 200 });

    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({
            message: "Error with server",
            error: err instanceof Error ? err.message : 'Unknown error'
        }, { status: 500 });
    }
}