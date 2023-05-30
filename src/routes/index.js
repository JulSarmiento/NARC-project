import express  from "express";
import httpStatus from "http-status";

import userRouter from "./user.routes.js";

const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    status: 'up',
    enviroment: process.env.ENVIRONMENT || 'Not found'
  });
})
  .use('/users', userRouter)

export default router;