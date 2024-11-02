import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("connected to db");

    return cached.conn;
  }

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "scores",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  if (!cached.conn) {
    console.log("Connection to MongoDB failed");
  }

  return cached.conn;
};
