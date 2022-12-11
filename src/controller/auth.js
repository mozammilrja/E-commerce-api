import User from "../models/user.model.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";



// Register
export const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login
export const login = async (req, res, next) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username });
    // if (!user) {
    //   return res.status(401).json({ msg: "User  email already exists!" });

    // } else {
    //   return res.status(401).json({ msg: "User email and password wrong!" });

    // }

    !user && res.status(401).json("Wrong user email");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword !=req.body.password &&
      res.status(401).json("Wrong Password");
    const { password, ...others } = user._doc;
    const Token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );


    res.status(200).json({...others,Token});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const logout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "successfully logout" });
  // req.user.deleteToken(req.token,(err,user)=>{
  //   if(err) return res.status(400).send(err);
  //   res.sendStatus(200);
};
