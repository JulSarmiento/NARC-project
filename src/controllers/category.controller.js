import httpStatus from "http-status";
import { Category, Subcategory } from "../models/index.js";

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


