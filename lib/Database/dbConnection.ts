import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface DBConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: DBConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }

  if (!cached.promise) {
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "imaginify",
        bufferCommands: false,
      });
    cached.conn = await cached.promise;
    return cached.conn;
  }
};
