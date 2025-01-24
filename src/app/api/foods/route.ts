import { NextRequest, NextResponse } from "next/server";
import FoodsModel from '@/app/model/foods';
import MongoDbConnect from '../../../../lib/mongoDb';


export async function GET() {
  try{
    await MongoDbConnect();
    const foods = await FoodsModel.find({}).sort({createdAt:-1}).limit(50);
    return NextResponse.json({success:true,data:foods});
  }
  catch(err){
    return NextResponse.json({message:"error with server",err},{status:500});
  }
}

export async function POST(req: NextRequest) {
  await MongoDbConnect();
  
  try {
    const { name, price, url } = await req.json();
    
    if (!name || !price || !url) {
      return NextResponse.json({ message: 'Name, Price, Url are required!' }, { status: 400 });
    }
    
    const newFood = await FoodsModel.create({ name, price, url });
    
    return NextResponse.json(newFood, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}