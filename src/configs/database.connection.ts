import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectionDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongoDB as string, { dbName: "parke", maxPoolSize: 100, minPoolSize: 10, connectTimeoutMS: 5000 });
        console.log(`MongoDB Connected Successfully: ${connect.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Failed to connect the MongoDB.", error.message);
        } else {
            console.log("An unknown error occurred while connecting to MongoDB.");
        }
        process.exit(1);
    }
}