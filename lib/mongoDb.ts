// /lib/mongodb.js
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI as string;

// Use a singleton pattern to manage the connection
let isConnected = false; // Track the connection status

const MongoDbConnect = async (database?:string) => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  
  try {
    const connection = await mongoose.connect(URI,{
      dbName:database
    }); // No options needed for latest versions
    isConnected = connection.connections[0].readyState === 1; // 1 means connected
    console.log("MongoDB connection established successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw new Error("MongoDB connection failed"); // Throw a clear error for better debugging
  }
};

export default MongoDbConnect;
