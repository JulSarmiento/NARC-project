import express from "express";
import { getStores, createStore, getStoreByParam , updateStore, deleteStore} from "../controllers/stores.controller.js";
import { getCart, addProductToCart } from "../controllers/cart.Controller.js";
import authValidator from "../middlewares/auth.validator.js";
const router = express.Router();

router.get("/", getStores);
router.post("/", createStore);
router.get("/:param", getStoreByParam);
router.patch("/:id", updateStore);
router.delete("/:id", deleteStore);

router.get("/:storeId/cart", authValidator ,getCart);
router.post("/:storeId/cart", authValidator, addProductToCart);

export default router;