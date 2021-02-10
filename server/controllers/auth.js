import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../db/userModel.js";

export const register = async (req, res) => {
  const {firstName, lastName, email, password, confirmPassword} = req.body;

  try {
    const existingUser = await UserModel.findOne({email});

    if (existingUser) {
      return res.status(400).json({message: "User already exists"});
    }

    if (password !== confirmPassword) {
      return res.status(400).json({message: "Passwords don't match"});
    }

    // encrypt password before
    const hashedPassword = await bcrypt.hash(password, 8);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const secret = process.env.secret;
    const token = jwt.sign({email: result.email, id: result._id}, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({result, token});
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});
  }
};

export const signin = async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await UserModel.findOne({email});

    if (!existingUser) {
      return res.status(404).json({message: "Cannot find user"});
    }

    const validatePassword = await bcrypt.compare(password, existingUser.password);

    if (!validatePassword) {
      return res.status(400).json({message: "Invalid credentials"});
    }

    const secret = process.env.secret;
    const token = jwt.sign({email: existingUser.email, id: existingUser._id}, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({result: existingUser, token});
  } catch (error) {
    res.status(500).json({message: "Something went wrong"});
  }
};
