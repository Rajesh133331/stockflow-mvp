import bcrypt from "bcrypt";
import { Organization, User } from "../models/index.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { organizationName, email, password } = req.body;

    if (!organizationName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const organization = await Organization.create({
      organizationName,
    });

    const user = await User.create({
      email,
      password: hashedPassword,
      organizationId: organization.id,
    });

    res.status(201).json({
      message: "User registered successfully.",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};


//login api

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required.",
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password.",
      });
    }

    const token = generateToken(user.id);

    res.status(200).json({
      message: "Login successful.",
      token,
      organizationName: user.organizationName,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};
