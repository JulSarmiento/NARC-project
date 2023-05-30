import express from "express";
import { getStores, createStore } from "../controllers/stores.controller.js";

const router = express.Router();

router.get("/", getStores);
router.post("/", createStore);

export default router;