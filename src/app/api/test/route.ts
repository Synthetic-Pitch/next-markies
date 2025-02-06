import redis from "../../../../lib/redis";
import { NextResponse } from 'next/server';

export async function GET() {
  const keys = await redis.scan(0, { MATCH: '*', COUNT: 1000 });
  return NextResponse.json(keys);
}