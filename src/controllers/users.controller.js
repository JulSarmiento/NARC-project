import httpStatus from "http-status";

import { User } from "../models/index.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: users
    });

  } catch (error) {
    next(error);
  };
};

