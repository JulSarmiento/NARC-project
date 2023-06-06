import express from "express";
import httpStatus from "http-status";

import userRouter from "./user.routes.js";
import storeRouter from "./stores.routes.js";
import productRouter from "./products.routes.js";
import categoryRouter from "./categories.routes.js";
import subcategory from "./subcategories.routes.js"

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
  .use("/categories", categoryRouter)
  .use("/subcategories", subcategory)

export default router;
