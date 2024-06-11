const express = require("express");
const { createUser } = require("../controllers/loginUsersController");
const router = express.Router();

router.post("/login", createUser);
