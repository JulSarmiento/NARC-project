import express from "express";

import {
  validateCreateSubcategory,
  validateUpdateSubcategory,
} from "../middlewares/index.js";

import {
  getSubCategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../controllers/subCategories.controller.js";

const router = express.Router();

router.get("/", getSubCategories);
router.patch("/:subcategoryId", [validateCreateSubcategory], updateSubCategory);
router.post("/subcategoryId", [validateUpdateSubcategory], createSubCategory);
router.delete("/:subcategoryId", deleteSubCategory);

export default router;
