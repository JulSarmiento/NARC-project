import express from "express";
import { getStores, createStore, getStoreByParam , updateStore, deleteStore} from "../controllers/stores.controller.js";

const router = express.Router();

router.get("/", getStores);
router.post("/", createStore);
router.get("/:param", getStoreByParam);
router.patch("/:id", updateStore);
router.delete("/:id", deleteStore);

export default router;