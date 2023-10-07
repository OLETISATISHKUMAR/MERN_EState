const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};
