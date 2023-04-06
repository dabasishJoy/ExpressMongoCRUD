const express = require("express");

// internal imports
const UserController = require("../controller/userController");

// creating a router
const router = express.Router();

// get users
router.get("/", UserController.getUsers);

// create user
router.post("/", UserController.CreateUser);

// update user
router.get("/:userId", UserController.getUser);

// delete a user
router.delete("/:userId", UserController.deleteUser);

// update a user by id
router.put("/:userId", UserController.updateUser);

module.exports = router;
