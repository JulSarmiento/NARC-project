import httpStatus from "http-status";

import { Store, Category } from "../models/index.js";

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
    const {name, image, orders, products, CategoryId} = req.body;
    const category = await Category.findByPk(CategoryId);

    const newStore = {
      name,
      image,
      orders,
      products,
      CategoryId,
      category : category.name
    }
    const store = await Store.create(newStore);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: store
    });

  } catch (error) {
    next(error);
  };
}
