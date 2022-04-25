import mongoose, { ConnectOptions } from "mongoose";

async function connectDb(){
  const URI = process.env.MONGO_DB_URI as string;

  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    process.exit(1);
  }
}


export default connectDb;
