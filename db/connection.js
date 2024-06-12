const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/login");
    console.log("Mnogodb connected sucessfully");
  } catch (error) {
    console.log("Connect failed" + error.message);
  }
};

module.exports = connectDB;
