import httpStatus from "http-status";
import { Op } from "sequelize";

import { Store, Category, Order, Product } from "../models/index.js";
import { isID } from "../utils/isID.js";

// GET all stores
export const getStores = async (_req, res, next) => {
  try {
    const stores = await Store.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: stores,
    });
  } catch (error) {
    next(error);
  }
};

// GET store by id or name
export const getStoreByParam = async (req, res, next) => {
  try {
    const param = req.params.param;
    const validate = isID(param);
    console.log(param);

    if (validate) {
      const store = await Store.findByPk(param, {
        include: [{ model: Order }, { model: Product }],
      });
      if (!store) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          error: "Store not found",
        });
      }
      res.status(httpStatus.OK).json({
        success: true,
        data: store,
      });
    } else {
      const store = await Store.findOne({
        where: { name: { [Op.iLike]: param } },
        include: [{ model: Order }, { model: Product }],
      });
      if (!store) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          error: "Store not found",
        });
      }
      res.status(httpStatus.OK).json({
        success: true,
        data: store,
      });
    }
  } catch (error) {
    next(error);
  }
};

// POST new store
export const createStore = async (req, res, next) => {
  try {
    const { name, image, orders, products, CategoryId } = req.body;
    const category = await Category.findByPk(CategoryId);

    const newStore = {
      name,
      image,
      orders,
      products,
      CategoryId,
      category: category.name,
    };
    const store = await Store.create(newStore);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: store,
    });
  } catch (error) {
    next(error);
  }
};

// PATCH store by id

export const updateStore = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, image, orders, products, CategoryId } = req.body;
    const category = await Category.findByPk(CategoryId);
    const storeToUpdate = await Store.findByPk(id);

    if (!storeToUpdate) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Store not found",
      });
    };

    const updatedStore = {
      name,
      image,
      orders,
      products,
      CategoryId,
      category: category.name,
    };

    await Store.update(updatedStore, {
      where: { id },
      returning: true,
    });

    const store = await Store.findByPk(id);

    res.status(httpStatus.OK).json({
      success: true,
      data: store,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE store by id

export const deleteStore = async (req, res, next) => {
  try {
    const id = req.params.id;
    const storeToDelete = await Store.findByPk(id);

    if (!storeToDelete) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Store not found",
      });
    };

    await Store.destroy({
      where: { id },
    });

    res.status(httpStatus.OK).json({
      success: true,
      message: "Store deleted",
    });
  } catch (error) {
    next(error);
  }
};
