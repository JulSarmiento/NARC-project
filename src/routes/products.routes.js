import express from "express";
import { getProducts, getProductByParam, createProduct } from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:param", getProductByParam);
router.post("/", createProduct);


export default router;