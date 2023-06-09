import httpStatus from "http-status";
import { Product, Store, Subcategory } from "../models/index.js";

// GET all products
export const getProducts = async (req, res, next) => {
  try {
    console.log('req.where', req.where)

    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
   
    const products = await Product.findAndCountAll({
      include: [{ model: Store }, { model: Subcategory }],
      where: req.where,
      limit, 
      offset
    });

    if(products.count === 0) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        error: "Products not found",
      });
    }
    
    res.status(httpStatus.OK).json({
      success: true,
      data: products,
      totalItems: products.count,
      totalPages: Math.ceil(products.count / limit),
      currentPage: parseInt(page, 10),
    });
  } catch (error) {
    next(error);
  }
};

// GET product by id or name
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
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
