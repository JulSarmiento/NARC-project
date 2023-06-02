import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getCart,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/:id/cart", getCart);
router.patch("/:id/cart", getCart);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
