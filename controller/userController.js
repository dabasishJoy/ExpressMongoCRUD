const bcrypt = require("bcrypt");

// internal import
const User = require("../models/User");

// get all user
exports.getUsers = async (req, res) => {
  try {
    const { page, size } = req.query;
    const users = await User.find().skip(page).limit(size);

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Unknown Error Occured" });
  }
};

// create user
exports.CreateUser = async (req, res) => {
  let newUser;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  newUser = new User({
    ...req.body,
    password: hashedPassword,
  });

  try {
    const result = await newUser.save();

    res.status(200).json({ message: "User created Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Unknown Error Occured" });
  }
};

// get user by id
exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Unknown Error" });
  }
};

// delete a user by id

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await User.findByIdAndRemove(userId);
    // Error if employee not found
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Unknown Error" });
  }
};

// Update an user by id
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { fname, lname, userType, status } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, {
      fname,
      lname,
      userType,
      status,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User Updated Successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unknown Error" });
  }
};
