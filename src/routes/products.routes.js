import express from "express";
import {
  getProducts,
  getProductByParam,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import {
  validateCreateProduct,
  validateUpdateProduct,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:param", getProductByParam);
router.post("/", [validateCreateProduct], createProduct);
router.patch("/:id", [validateUpdateProduct], updateProduct);
router.delete("/:id", deleteProduct);

export default router;
