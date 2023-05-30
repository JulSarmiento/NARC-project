import httpStatus from "http-status";

import { Products } from "../models/index.js";

export const getProducts = async (_req, res, next) => {
  try {
    const products = await Products.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: products
    });

  } catch (error) {
    next(error);
  };
}