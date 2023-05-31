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




