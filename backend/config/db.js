import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default async function connectDB() {

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully! ${process.env.MONGO_URI}`);
  } catch(error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit
  }
}