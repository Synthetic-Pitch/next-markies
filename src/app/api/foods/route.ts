import { NextRequest, NextResponse } from "next/server";
import FoodsModel from '@/app/model/foods';
import MongoDbConnect from '../../../../lib/mongoDb';


export async function GET() {
  try{
    await MongoDbConnect();
    const foods = await FoodsModel.find({}).sort({createdAt:-1}).limit(50);
    return NextResponse.json(foods,{status:200});
  }
  catch(err){
    return NextResponse.json({message:"error with server",err},{status:500});
  }
}

export async function POST(req: NextRequest) {
  await MongoDbConnect();
  
  try {
    const { name, price, url, description } = await req.json();
    
    if (!name || !price || !url) {
      return NextResponse.json({ message: 'Name, Price, Url are required!' }, { status: 400 });
    }
    const parsedPrice = parseFloat(price);
    
    if(!description || description === ''){
      const newFood = await FoodsModel.create({name,price:parsedPrice,url})
      return NextResponse.json(newFood,{status:201})
    }
    
    const newFood = await FoodsModel.create({name,price:parsedPrice,url,description});
    return NextResponse.json(newFood, { status: 201 });
    
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Server Error',err }, { status: 500 });
  }
}