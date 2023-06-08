import express from "express";
import { authentication } from "../middlewares/index.js";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

import {
  rolValidator,
  validateCreateUser,
  validateUpdateUser,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/", [authentication, rolValidator('admin')], getUsers);
router.get("/:id", [authentication, rolValidator('admin')], getUserById);
router.post("/", [validateCreateUser], createUser);
router.patch("/:id", [authentication, rolValidator('client'), validateUpdateUser] ,updateUser);
router.delete("/:id", [authentication, rolValidator('client')], deleteUser);

export default router;
