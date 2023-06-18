import express from "express";
import httpStatus from "http-status";
import { User } from '../models/index.js';
import { authentication } from "../middlewares/index.js";

const router = express.Router();

router.get("/", [authentication], async (req, res) => {

  const user = await User.findByPk(req.user.id, {
    attributes: ['id', 'name', 'email', 'role', 'createdAt', 'updatedAt']
  });
  
  res.status(httpStatus.OK).json({
    success: true,
    message: 'User profile',
    data: user
  });
});

export default router;