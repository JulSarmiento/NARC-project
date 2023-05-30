import httpStatus from "http-status";
import { Cart } from "../models/index.js";

export const getCart = async (_req, res, next) => {
  try {
    const cart = await Cart.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: cart
    });
  } catch (error) {
    next(error);
  };
};


