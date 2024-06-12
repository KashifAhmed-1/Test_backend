const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const connectDB = require("./db/connection");
const Users = require("./modal/loginUserModal");

connectDB();

// CREATING LOGIN USERS DATA
app.post("/login", async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
});

// app.use('/api/users',userRoutes)

app.get("/getLoginUsers", (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(5000, (req, res) => {
  console.log("server is running");
});
