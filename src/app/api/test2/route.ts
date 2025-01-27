import { NextResponse } from "next/server";
import MongoDbConnect from "../../../../lib/mongoDb";
import mongoose from "mongoose";


export async function GET() {
  try {
    await MongoDbConnect();
    const connection = mongoose.connection;
    
    // Use the native MongoDB driver to get the list of collections
    if (!connection.db) {
      throw new Error("Database connection is not established");
    }
    const collections = await connection.db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);

    console.log("Collections in FoodDB:", collectionNames);
    return NextResponse.json({ collections: collectionNames });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}