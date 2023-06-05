import express from "express";
import {
  getStores,
  createStore,
  getStoreByParam,
  updateStore,
  deleteStore,
} from "../controllers/stores.controller.js";
import { getCart, addProductToCart } from "../controllers/cart.Controller.js";
import authValidator from "../middlewares/auth.validator.js";
import {
  validateCreateStore,
  validateUpdateStore,
  validateCreateCart,
} from "../middlewares/index.js";
const router = express.Router();

router.get("/", getStores);
router.get("/:param", getStoreByParam);
router.post("/", [validateCreateStore], createStore);
router.patch("/:id", [validateUpdateStore] ,updateStore);
router.delete("/:id", deleteStore);

router.get("/:storeId/cart", [authValidator], getCart);
router.post("/:storeId/cart", [authValidator, validateCreateCart ], addProductToCart);

export default router;
