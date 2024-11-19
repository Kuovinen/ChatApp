import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCokie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    //HAS PASSOWRD
    const salt = await bcrypt.genSalt(10); //higher better but slower
    const hadshedPassword = await bcrypt.hash(password, salt);
    //https://avatar-placeholder.iran.liara.run
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullname,
      username,
      password: hadshedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateTokenAndSetCokie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(500).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Signup controller Error", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  res.send("Signup Route");
};
export const login = (req, res) => {
  res.send("Signup Route");
};
