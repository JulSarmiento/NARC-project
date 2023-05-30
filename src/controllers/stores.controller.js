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

export const createStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: store
    });

  } catch (error) {
    next(error);
  };
}
