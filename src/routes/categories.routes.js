import express from "express";

import {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:categoryId", getCategoryById);
router.post("/", createCategory);
router.patch("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

export default router;
