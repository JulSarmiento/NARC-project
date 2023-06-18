import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  getProducts,
} from "../controllers/products.controller.js";
import {
  advanceSearch,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/", [authentication, advanceSearch], getProducts);

export default router;
