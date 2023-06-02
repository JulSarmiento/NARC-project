import  express  from "express";

const router = express.Router();

import {
  getSubCategories,
  getSubCategoryByCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../controllers/subCategories.controller.js";


router.get("/", getSubCategories);
router.get("/:categoryId", getSubCategoryByCategory);
router.patch("/:subcategoryId", updateSubCategory);
router.post("/", createSubCategory);
router.delete("/:subcategoryId", deleteSubCategory);

export default router;