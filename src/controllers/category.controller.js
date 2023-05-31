import { Category, Subcategory } from "../models/index.js";

export const getCategories = async (_req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: Subcategory
    });
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {

    next(error);
  };
};

export const getSubCategories = async (_req, res, next) => {
  try {
    const subcategories = await Subcategory.findAll();
    res.status(200).json({
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
    res.status(200).json({
      success: true,
      data: categorySelected
    });
  } catch (error) {
    next(error);
  };
}