import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

import {
  validateCreateUser,
  validateUpdateUser,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", [validateCreateUser], createUser);
router.patch("/:id", [validateUpdateUser] ,updateUser);
router.delete("/:id", deleteUser);

export default router;
