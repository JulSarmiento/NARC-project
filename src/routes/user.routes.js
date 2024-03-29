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
  ageValidator,
  advanceSearch,
  validateCreateUser,
  validateUpdateUser,
} from "../middlewares/index.js";

const router = express.Router();

router.get("/", [authentication, rolValidator('admin'), advanceSearch], getUsers);
router.get("/:id", [authentication, rolValidator('admin')], getUserById);
router.post("/", [ageValidator, validateCreateUser], createUser);
router.patch("/:id", [authentication, rolValidator('client'), validateUpdateUser] ,updateUser);
router.delete("/:id", [authentication, rolValidator('client')], deleteUser);

export default router;
