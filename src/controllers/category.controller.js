import httpStatus from "http-status";
import { Category, Subcategory } from "../models/index.js";

/**
 * 
 * @param {e.Request} _req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get all categories
 * @example GET /categories
 * @example GET /categories?name=categoryName
 */
export const getCategories = async (_req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: Subcategory
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: categories
    });
  } catch (error) {

    next(error);
  };
};


/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get a category by id
 * @example GET /categories/:categoryId
 */
export const getCategoryById = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const categorySelected = await Category.findByPk(categoryId, {
      include: Subcategory
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: categorySelected
    });
  } catch (error) {
    next(error);
  };
};


/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Create a category
 * @example POST /categories
 */
export const createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: category
    });
  } catch (error) {
    next(error);
  };
};

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Update a category
 * @example PUT /categories/:categoryId
 */
export const updateCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    await Category.update(req.body, {
      where: { id: categoryId }
    });
    res.status(httpStatus.OK).json({
      success: true,
      date: await Category.findByPk(categoryId, {
        include: Subcategory
      })
    });
  } catch (error) {
    next(error);
  };
};

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Delete a category
 * @example DELETE /categories/:categoryId
 */
export const deleteCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    await Category.destroy({
      where: { id: categoryId }
    });
    res.status(httpStatus.OK).json({
      success: true,
      message: `Category with id ${categoryId} deleted`
    });
  } catch (error) {
    next(error);
  };
};


