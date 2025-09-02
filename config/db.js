import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Database connected successfully - Status Code: 200");
    } catch (error) {
        console.log('Database connection error:', error.message);
        console.log('Server will continue running without database connection');
    }
}

export default connectDB;