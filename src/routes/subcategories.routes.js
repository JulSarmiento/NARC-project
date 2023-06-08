import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  rolValidator,
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

router.get("/",[authentication], getSubCategories);
router.post("/subcategoryId", [authentication, rolValidator('admin'), validateUpdateSubcategory], createSubCategory);
router.patch("/:subcategoryId", [authentication, rolValidator('admin'), validateCreateSubcategory], updateSubCategory);
router.delete("/:subcategoryId", [authentication, rolValidator('admin')], deleteSubCategory);

export default router;
