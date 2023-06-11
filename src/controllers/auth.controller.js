import httpStatus from "http-status";
import JWT from "jsonwebtoken";

import { User } from "../models/index.js";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * @description Login a user
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        message:  "User or password combination does not exists",
      });
    };    

    const token = JWT.sign(
      { 
        id: user.id,
        role: user.role, 
      }, process.env.JWT_SECRET, {
      expiresIn: "30m",
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

/**
 * 
 * @param {*} req
 * @param {*} res
 * @returns
 * @description Register a user
*/
export const restricted = async (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Confidential data",
  });
}
