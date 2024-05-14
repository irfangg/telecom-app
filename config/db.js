// const mongoose = require("mongoose");

const connectDB = async (endPoint) => {
  try {
    // mongoose.connect(process.env.MONGO_URI);
    // console.log("MongoDB connected!!");
    const data = await fetch(`${process.env.MONGO_URI}/${endPoint}`).then(res=>res.json());
    return data;
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;