import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import {
  rolValidator,
  advanceSearch,
  validateCreateProduct,
  validateUpdateProduct,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/", [authentication, advanceSearch], getProducts);
router.get("/:param", [authentication], getProductById);
router.post("/", [authentication, rolValidator('seller'), validateCreateProduct], createProduct);
router.patch("/:id", [authentication, rolValidator('seller'), validateUpdateProduct], updateProduct);
router.delete("/:id", [authentication, rolValidator('seller')], deleteProduct);

export default router;
