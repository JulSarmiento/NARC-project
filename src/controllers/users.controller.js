import httpStatus from "http-status";

import { User } from "../models/index.js";

export const getUsers = async (_req, res, next) => {
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

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: user
    });

  } catch (error) {
    next(error);
  };
}