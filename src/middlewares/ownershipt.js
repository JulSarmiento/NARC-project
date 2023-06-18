import httpStatus from "http-status";
import { Store } from "../models/index.js";

const checkOwnership = async (req, res, next) => {
  try {
    const { id: userid } = req.user;

    const store = await Store.findOne({
      where: { ownerId: userid },
    });

    console.log('store', store)

    if (!store) {
      return res.status(httpStatus.FORBIDDEN).json({
        success: false,
        error: "You are not the owner of this store",
      });
    }    

    next();

  } catch (error) {
    next(error);
  }
};

export default checkOwnership;
