import express from "express";
import { login, restricted } from "../controllers/auth.controller.js";
import authentication from "../middlewares/authentication.js";

const router = express.Router();

router.post("/login", [authentication], login);

router.get("/restricted", [authentication], restricted);

export default router;
