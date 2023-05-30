import httpStatus from "http-status";

import { Store } from "../models/index.js";

export const getStores = async (_req, res, next) => {
  try {
    const stores = await Store.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: stores
    });

  } catch (error) {
    next(error);
  };
}
