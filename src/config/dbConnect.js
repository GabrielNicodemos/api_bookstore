import mongoose from "mongoose";

async function connectDB() {
    mongoose.connect(process.env.DB_STRING_CONNECT)
    return mongoose.connection;
}

export default connectDB;