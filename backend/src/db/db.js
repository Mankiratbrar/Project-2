import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'
connectDB().catch(err => console.log(err));

async function connectDB() {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to DB");
        console.log(conn.connection.host);
      }
        
     catch (error) {
        console.log(error);
    }
}

export default connectDB;