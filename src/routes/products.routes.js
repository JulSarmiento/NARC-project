import express from "express";
import { getProducts, getProductByParam, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:param", getProductByParam);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router;