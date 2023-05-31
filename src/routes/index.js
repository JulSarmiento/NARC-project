import express from "express";
import httpStatus from "http-status";

import userRouter from "./user.routes.js";
import storeRouter from "./stores.routes.js";
import productRouter from "./products.routes.js";
import orderRouter from "./orders.routes.js";
import cartRouter from "./cart.routes.js";
import categoryRouter from "./categories.routes.js";

const router = express.Router();

router
  .get("/health", (_req, res) => {
    res.status(httpStatus.OK).json({
      success: true,
      status: "up",
      enviroment: process.env.ENVIRONMENT || "Not found",
    });
  })
  .use("/users", userRouter)
  .use("/stores", storeRouter)
  .use("/products", productRouter)
  .use("/orders", orderRouter)
  .use("/cart", cartRouter)
  .use("/categories", categoryRouter)

export default router;
