const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
};

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(user &&(await user.matchPassword(password))){
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
    });
  }else{
    res.status(401);
    throw new Error("Invalid email or password");
  } 
});

const allUsers = asyncHandler(async(req,res) => {
  const keyword = req.query.search ? {
    $or:[
      {name:{$regex: req.query.search, $options: 'i'}},
      {email:{$regex: req.query.search, $options: 'i'}},
    ]
  }
: {};

  const uers = await User.find(keyword).find({_id:{$ne: req.user._id}});
  res.send(uers);
});

module.exports = { registerUser , authUser , allUsers };
