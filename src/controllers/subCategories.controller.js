import httpStatus from "http-status";
import { Category, Subcategory } from "../models/index.js";

export const getSubCategories = async (_req, res, next) => {
  try {
    const subcategories = await Subcategory.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: subcategories
    });
  } catch (error) {
    next(error);
  };
}

export const getSubCategoryByCategory = async (req, res, next) => {
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
}

export const createSubCategory = async (req, res, next) => {
  try {
    const subcategory = await Subcategory.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: subcategory
    });
  } catch (error) {
    next(error);
  };
};

export const updateSubCategory = async (req, res, next) => {
  try {
    const { subcategoryId } = req.params;
    await Subcategory.update(req.body, {
      where: { id: subcategoryId }
    });
    res.status(httpStatus.OK).json({
      success: true,
      date: await Subcategory.findByPk(subcategoryId)
    });
  } catch (error) {
    next(error);
  };
};


export const deleteSubCategory = async (req, res, next) => {
  try {
    const { subcategoryId } = req.params;
    await Subcategory.destroy({
      where: { id: subcategoryId }
    });
    res.status(httpStatus.OK).json({
      success: true,
      message: `Subcategory with id ${subcategoryId} deleted`
    });
  } catch (error) {
    next(error);
  };
}