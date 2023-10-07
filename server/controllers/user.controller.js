const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const errorHandler = require("../utils/error")

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


exports.login = async(req, res, next)=>{
  try {
    const {email, password} = req.body

    const exist = await User.findOne({ email })
    if(!exist) return next(errorHandler(404, "User Not Found!!"))
    const existpassword = bcrypt.compareSync(password, exist.password)
    if(!existpassword) return next(errorHandler(401, "Wrong Credentials"))
    const token = jwt.sign({id : exist._id}, process.env.JWT_KEY)
  res.cookie("access_token", token, {httpOnly:true}).status(201).json({
    exist
  })

  } catch (error) {
    next(error)
  }
}
