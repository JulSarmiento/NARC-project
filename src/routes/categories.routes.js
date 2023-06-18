import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  rolValidator,
  advanceSearch,
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

router.get("/", [authentication, advanceSearch], getCategories);
router.get("/:categoryId",[authentication, rolValidator('admin')], getCategoryById);
router.post("/", [authentication, rolValidator('admin'), validateCreateCategory], createCategory);
router.patch("/:categoryId", [authentication, rolValidator('admin'), validateUpdateCategory], updateCategory);
router.delete("/:categoryId", [authentication, rolValidator('admin')], deleteCategory);

export default router;
