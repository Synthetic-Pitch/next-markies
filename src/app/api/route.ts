import { NextRequest, NextResponse } from 'next/server';
import MongoDbConnect from '../../../lib/mongoDb';
import FoodsModel from '../model/userModel';

export async function GET() {
    await MongoDbConnect();
    try {
        const foods = await FoodsModel.find({}).sort({ createdAt: -1 }).limit(50);
        const response = NextResponse.json({ success: true, data: foods });

        // Add Cache-Control header for GET requests, This makes server more faster!
        response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=120');
        return response;
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "error with server" }, { status: 500 });
    }
};

export async function POST(req: NextRequest) {
    await MongoDbConnect();
    try {
        const { name, email } = await req.json();
        if (!name || !email) {
            return NextResponse.json({ message: 'Email and name are required!' });
        }
        const newData = await FoodsModel.create({ name, email });
        
        // Since POST modifies data, invalidate the cache by setting no-cache headers
        const response = NextResponse.json({ newData }, { status: 201 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (err) {
        console.error('uploading to database error in server', err);
        return NextResponse.json({ message: 'Error', err }, { status: 500 });
    }
};