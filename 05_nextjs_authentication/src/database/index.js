import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionUrl = "mongodb+srv://tahsinferdous3546:amJ2L6B7hUfh9eHm@cluster0.6lezngo.mongodb.net/"
        await mongoose.connect(connectionUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;