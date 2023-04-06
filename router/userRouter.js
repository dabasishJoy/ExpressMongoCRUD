const express = require("express");

// internal imports
const UserController = require("./controller/userController");

// creating a router
const router = express.Router();

// get users
router.get("/", UserController);

// create user
router.post("/", UserController);

module.exports = router;
