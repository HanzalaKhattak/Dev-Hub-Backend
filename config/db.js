import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Database connected successfully - Status Code: 200");
    } catch (error) {
        console.log('Database connection error:', error.message);
        console.log('Server will continue running without database connection');
        // Don't exit the process, just log the error
        // process.exit(1);
    }
}

export default connectDB;