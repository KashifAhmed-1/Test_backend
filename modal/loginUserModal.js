const { uniqueId } = require("lodash");
const mongoose = require("mongoose");
const { type } = require("os");

const loginUserModal = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    unique: true,
  },
});

module.exports = mongoose.model("users", loginUserModal);
