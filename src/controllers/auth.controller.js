import httpStatus from "http-status";
import JWT from "jsonwebtoken";
import { User } from "../models/index.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password} });

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: "User not found",
      });
    }

    const token = JWT.sign(
      { 
        id: user.id 
      }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(httpStatus.OK).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong",
      error,
    });
  }

};

export const restricted = async (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Confidential data",
  });
}