import httpStatus from "http-status";
import { Op } from "sequelize";

import { Store, Category, Order, Product } from "../models/index.js";
import { isID } from "../utils/isID.js";

// GET all stores
export const getStores = async (_req, res, next) => {
  try {
    const stores = await Store.findAll({
      include: [{ model: Category }],
    });
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

    const store = isID(param)
      ? await Store.findByPk(param, {
          include: [{ model: Category }, { model: Product }, { model: Order }],
        })
      : await Store.findOne({
          where: { name: { [Op.iLike]: param } },
          include: [{ model: Category }, { model: Product }, { model: Order }],
        });

    res.status(httpStatus.OK).json({
      success: true,
      data: store,
    });
  } catch (error) {
    next(error);
  }
};

// POST new store
export const createStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
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
    const { id } = req.params;
    const storeToUpdate = await Store.findByPk(id);

    if (!storeToUpdate) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Store not found",
      });
    }

    await Store.update(req.body, {
      where: { id },
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: await Store.findByPk(id),
    });
  } catch (error) {
    next(error);
  }
};

// DELETE store by id

export const deleteStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const storeToDelete = await Store.findByPk(id);

    if (!storeToDelete) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Store not found",
      });
    }

    await Store.destroy({
      where: { id },
    });

    res.status(httpStatus.OK).json({
      success: true,
      message: `The store "${storeToDelete.name}" was delete successfully`,
    });
  } catch (error) {
    next(error);
  }
};
