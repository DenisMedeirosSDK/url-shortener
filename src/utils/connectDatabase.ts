import mongoose from 'mongoose';
const DB_MONGO_URL = process.env.DB_MONGO_URL as string;

export async function getConnection() {
  try {
    await mongoose.connect(DB_MONGO_URL);
  } catch (error) {
    console.log(error);
  }
}
