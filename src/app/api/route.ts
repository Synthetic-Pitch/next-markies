import { NextRequest, NextResponse } from "next/server";
import TestModel from '@/app/model/test'
import MongoDbConnect from "../../../lib/mongoDb";
import Redis from "ioredis";

const redis = new Redis({
    host:'localhost',
    port: 6379
});
const CACHE_KEY = 'test-data';
export const config = { runtime: "edge" }; // Enables Edge Function

export async function GET(){
    await MongoDbConnect()
    try{
      const cachedData = await redis.get(CACHE_KEY);
      if (cachedData) {
        return NextResponse.json(JSON.parse(cachedData));
      }
      
      const data = await TestModel.find({});
      await redis.set(CACHE_KEY, JSON.stringify(data));
      return NextResponse.json(data);
    } catch (err) {
      return NextResponse.json({ error: 'Failed to fetch data',err });
    }
  }


export async function POST(req:NextRequest){
    await MongoDbConnect()
    try{
        const {name,age} = await req.json();
        const newData = await TestModel.create({name,age});
        return NextResponse.json({newData},{status:201});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({message:"err on server"},{status:500})
    }
}