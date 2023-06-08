import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  getStores,
  createStore,
  getStoreByParam,
  updateStore,
  deleteStore
} from "../controllers/stores.controller.js";
import {
  getOrders,
  getOrder,
  createOrder,
} from "../controllers/orders.controller.js";
import { getCart, addProductToCart } from "../controllers/cart.Controller.js";
import {
  rolValidator,
  validateCreateStore,
  validateUpdateStore,
  validateCreateCart,
  validateCreateOrder,
} from "../middlewares/index.js";
const router = express.Router();

router.get("/", [authentication, rolValidator('client')], getStores);
router.get("/:param",[authentication, rolValidator('client')], getStoreByParam);
router.post("/", [authentication, rolValidator('seller'), validateCreateStore], createStore);
router.patch("/:id", [authentication, rolValidator('seller'), validateUpdateStore], updateStore);
router.delete("/:id", [authentication, rolValidator('seller')], deleteStore);

router.get("/:storeId/cart", [authentication, rolValidator('client')],getCart);
router.post("/:storeId/cart", [authentication, rolValidator('client'), validateCreateCart], addProductToCart);

router.get("/:storeId/orders", [authentication], getOrders);
router.get("/:storeId/orders/:orderId", [authentication], getOrder);
router.post("/:storeId/orders", [authentication,  validateCreateOrder], createOrder );


export default router;
