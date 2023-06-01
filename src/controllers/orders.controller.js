import httpStatus from "http-status";

import { Order } from "../models/index.js";

export const getOrders = async (_req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: orders
    });

  } catch (error) {
    next(error);
  };
}

