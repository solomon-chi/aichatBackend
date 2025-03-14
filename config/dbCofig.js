import mongoose from "mongoose";
import env from 'dotenv';

env.config();

export const connectMongoDBatlas = async () =>{
    try {
        const mongoURI = process.env.MONGO_ATLAS;
        const conn = await mongoose.connect(mongoURI);
        console.log(`Mongo database connection established ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error connecting to MongoDB Atlas: ${error.message}`);
        process.exit(1);
    }
    
}