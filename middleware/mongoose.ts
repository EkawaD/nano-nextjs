import mongoose from "mongoose";

const Database = async () => mongoose.connect(process.env.MONGO_URI!)

export default Database