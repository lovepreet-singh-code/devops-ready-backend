import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

     if (!name || !email || !password) {
      throw new Error("All fields are required");
    }
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
   const user = await User.create({
    name,
    email,
    password: hashedPassword
    });
    
    res.status(201).json({
      message: "User created successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
