import httpStatus from "http-status";
import { Store, Category, Order, Product } from "../models/index.js";

// GET all stores
export const getStores = async (req, res, next) => {
  try {

    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const stores = await Store.findAndCountAll({
      include: [{ model: Category }],
      where: req.where,
      limit, 
      offset
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: stores,
      totalItems: stores.count,
      totalPages: Math.ceil(stores.count / limit),
      currentPage: parseInt(page, 10),
    });
  } catch (error) {
    next(error);
  }
};

// GET store by id or name
export const getStoreById = async (req, res, next) => {
  try{
    const store = await Store.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Product }, { model: Order}],
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: store,
    });
    
  } catch(err) {
    next(err);
  }
}

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
