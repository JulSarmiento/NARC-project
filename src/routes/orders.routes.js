import express from "express";

import {
  validateCreateOrder,
  validateUpdateOrder
} from "../middlewares/index.js";

import {
  getOrders,
  // getOrder,
  // createOrder,
  // updateOrder,
} from "../controllers/orders.controller.js";
import authValidator from "../middlewares/auth.validator.js";

const router = express.Router();

router.get("/storeId", getOrders);
// router.get("/:orderId", getOrder);
// router.post("/:storeId",[ authValidator, validateCreateOrder], createOrder);
// router.patch("/:orderId", [authValidator, validateUpdateOrder], updateOrder);

export default router;
