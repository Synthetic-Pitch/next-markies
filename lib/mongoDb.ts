// /lib/mongodb.js
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI as string;

// Instead of boolean flag, we cache the mongoose instance
let cachedConnection: typeof mongoose | null = null;

const MongoDbConnect = async () => {
  // If we have a cached connection, check if it's still valid
  if (cachedConnection) {
    // Check if the connection is still alive
    if (mongoose.connections[0].readyState === 1) {
      console.log("Using existing MongoDB connection");
      return;
    }
    // If we get here, the connection is dead, so we'll make a new one
    cachedConnection = null;
  }
  
  try {
    // Add some basic options for better reliability
    const opts = {
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    const connection = await mongoose.connect(URI, opts);
    
    // Cache the mongoose instance
    cachedConnection = connection;

    // Set up event listeners for connection issues
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      cachedConnection = null;
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
      cachedConnection = null;
    });

    console.log("New MongoDB connection established");
    return connection;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw new Error("MongoDB connection failed");
  }
};

export default MongoDbConnect;