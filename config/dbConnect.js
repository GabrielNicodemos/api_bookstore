import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE);

let db = mongoose.connection;

export default db;