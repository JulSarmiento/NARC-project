import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  getStores,
  createStore,
  getStoreById,
  updateStore,
  deleteStore
} from "../controllers/stores.controller.js";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import {
  getOrders,
  getOrder,
  createOrder,
} from "../controllers/orders.controller.js";
import { getCart, addProductToCart } from "../controllers/cart.Controller.js";
import {
  rolValidator,
  advanceSearch,
  validateCreateProduct,
  validateUpdateProduct,
  validateCreateStore,
  validateUpdateStore,
  validateCreateCart,
  validateCreateOrder,
} from "../middlewares/index.js";
const router = express.Router();

// Stores
router.get("/", [authentication, advanceSearch, rolValidator('client')], getStores);
router.get("/:id",[authentication, rolValidator('client')], getStoreById);
router.post("/", [authentication, rolValidator('seller'), validateCreateStore], createStore);
router.patch("/:id", [authentication, rolValidator('seller'), validateUpdateStore], updateStore);
router.delete("/:id", [authentication, rolValidator('seller')], deleteStore);

// Products
router.get("/:storeId/products", [authentication, advanceSearch], getProducts);
router.get("/:storeId/products/:id", [authentication], getProductById);
router.post("/:storeId/products", [authentication, rolValidator('seller'), validateCreateProduct], createProduct);
router.patch("/:storeId/products/:id", [authentication, rolValidator('seller'), validateUpdateProduct], updateProduct);
router.delete("/:storeId/products:id", [authentication, rolValidator('seller')], deleteProduct);

// Cart
router.get("/:storeId/cart", [authentication, rolValidator('client')],getCart);
router.post("/:storeId/cart", [authentication, rolValidator('client'), validateCreateCart], addProductToCart);

// Orders
router.get("/:storeId/orders", [authentication], getOrders);
router.get("/:storeId/orders/:orderId", [authentication], getOrder);
router.post("/:storeId/orders", [authentication,  validateCreateOrder], createOrder );


export default router;
