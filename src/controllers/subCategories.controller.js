import httpStatus from "http-status";
import { Subcategory } from "../models/index.js";


/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get all subcategories
 * @example GET /subcategories
 */
export const getSubCategories = async (req, res, next) => {
  try {
    
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const subcategories = await Subcategory.findAndCountAll({
      where: req.where,
      limit,
      offset
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: subcategories,
      totalItems: subcategories.count,
      totalPages: Math.ceil(subcategories.count / limit),
      currentPage: parseInt(page, 10),
    });
  } catch (error) {
    next(error);
  };
}

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get subcategory by id
 * @example GET /subcategories/:subcategoryId
 */
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

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Update subcategory by id
 * @example PUT /subcategories/:subcategoryId
 */
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


/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Delete subcategory by id
 * @example DELETE /subcategories/:subcategoryId
 */
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