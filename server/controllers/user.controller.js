const User = require("../models/user.model");
const bcrypt = require("bcryptjs")


exports.create = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const hashedpassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ username, email, password : hashedpassword });
    await newUser.save();

    res.status(201).json({
      message: "User Created Successfully",
      newUser
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
