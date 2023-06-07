import express from "express";
import httpStatus from "http-status";

import userRouter from "./user.routes.js";
import storeRouter from "./stores.routes.js";
import productRouter from "./products.routes.js";
import categoryRouter from "./categories.routes.js";
import subcategoryRouter from "./subcategories.routes.js";
import authRouter from "./auth.routes.js";

const router = express.Router();

router
  .get("/health", (_req, res) => {
    res.status(httpStatus.OK).json({
      success: true,
      status: "up",
      enviroment: process.env.ENVIRONMENT || "Not found",
    });
  })
  .use("/auth", authRouter)
  .use("/users", userRouter)
  .use("/stores", storeRouter)
  .use("/products", productRouter)
  .use("/categories", categoryRouter)
  .use("/subcategories", subcategoryRouter)
  

export default router;
