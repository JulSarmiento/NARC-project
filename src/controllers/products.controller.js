import httpStatus from "http-status";
import { Op } from "sequelize";
import { Product, Store, Subcategory } from "../models/index.js";
import { isID } from "../utils/isID.js";

// GET all products
export const getProducts = async (req, res, next) => {
  try {
    console.log('req.where', req.where)
   
    const products = await Product.findAll({
      include: [{ model: Store }, { model: Subcategory }],
      where: req.where,
    });

    if(products.length === 0) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Products not found",
      });
    }
    
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

    const product = validate
      ? await Product.findByPk(param, {
          include: [{ model: Store }, { model: Subcategory }],
        })
      : await Product.findOne({
          where: { name: { [Op.iLike]: param } },
          include: [{ model: Store }, { model: Subcategory }],
        });

    res.status(httpStatus.OK).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// POST new product
export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// PATCH product by id
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Product not found",
      });
    }

    await Product.update(req.body, {
      where: { id },
    });

    const updatedProduct = await Product.findByPk(id);
    res.status(httpStatus.OK).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE product by id
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.status(httpStatus.OK).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
