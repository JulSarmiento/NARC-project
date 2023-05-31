import httpStatus from "http-status";
import { Op } from "sequelize";
import { Product, Store, Subcategory } from "../models/index.js";
import { isID } from "../utils/isID.js";

// GET all products
export const getProducts = async (_req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Store }, { model: Subcategory }],
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// GET product by id or name
export const getProductByParam = async (req, res, next) => {
  try {
    const param = req.params.param;
    const validate = isID(param);
    console.log(param);

    if (validate) {
      const product = await Product.findByPk(param, {
        include: [{ model: Store }, { model: Subcategory }],
      });
      if (!product) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          error: "Product not found",
        });
      }
      res.status(httpStatus.OK).json({
        success: true,
        data: product,
      });
    } else {
      const product = await Product.findOne({
        where: { name: { [Op.iLike]: param } },
        include: [{ model: Store }, { model: Subcategory }],
      });
      if (!product) {
        return res.status(httpStatus.NOT_FOUND).json({
          success: false,
          error: "Product not found",
        });
      }
      res.status(httpStatus.OK).json({
        success: true,
        data: product,
      });
    }
  } catch (error) {
    next(error);
  }
};

// POST new product
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, stock, image, storeId, subcategoryId } =
      req.body;
    const store = await Store.findByPk(storeId);
    const subcategory = await Subcategory.findByPk(subcategoryId);
    if (!store) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Store not found",
      });
    }

    if (!subcategory) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Subcategory not found",
      });
    }

    const newProduct = {
      name,
      description,
      price,
      stock,
      image,
      storeId,
      subcategoryId
    };

    await Product.create(newProduct);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

// PATCH product by id
export const updateProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Product not found",
      });
    }

    await Product.update(req.body, { where: { id } });

    const updatedProduct = await Product.findByPk(id);
    res.status(httpStatus.OK).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
}

// DELETE product by id
export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Product.destroy({ where: { id } });
    res.status(httpStatus.OK).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
}

