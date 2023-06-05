import express from "express";

import {
  validateCreateCategory,
  validateUpdateCategory,
} from "../middlewares/index.js";

import {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:categoryId", getCategoryById);
router.post("/", [validateCreateCategory], createCategory);
router.patch("/:categoryId", [validateUpdateCategory], updateCategory);
router.delete("/:categoryId", deleteCategory);

export default router;
