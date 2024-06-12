
const mongoose = require("mongoose");

const loginUserModal = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("users", loginUserModal);
