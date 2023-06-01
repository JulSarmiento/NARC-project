import express from "express";
import { getStores, createStore, getStoreByParam , updateStore, deleteStore} from "../controllers/stores.controller.js";
import { getCart, addProductToCart } from "../controllers/cart.Controller.js";
const router = express.Router();

router.get("/", getStores);
router.post("/", createStore);
router.get("/:param", getStoreByParam);
router.patch("/:id", updateStore);
router.delete("/:id", deleteStore);

router.get("/:storeId/cart", getCart);
router.post("/:storeId/cart", addProductToCart);

export default router;