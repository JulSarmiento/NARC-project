import httpStatus from "http-status";
import { Product, Store, Subcategory } from "../models/index.js";


/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get all products
 * @example GET /products
 * @example GET /products?name=product1
 * @example GET /products?name=product1&price=100
 * @example GET /products?name=product1&price=100&categoryId=1
 */
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


/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get product by id
 * @example GET store/:storeid/products/:productid
 */
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

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Create a product
 * @example POST store/:storeid/products
 */
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

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Update a product by id
 * @example PUT store/:storeid/products/:productid
 */
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

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Delete a product by id
 * @example DELETE store/:storeid/products/:productid
 */
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
