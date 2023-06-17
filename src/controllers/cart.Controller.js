import httpStatus from "http-status";
import { Op } from "sequelize";
import { Cart, CartItem, Product } from "../models/index.js";

/**
 * 
 * @param {e.Request} req 
 * @param {e.Response} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get cart
 * @example GET store/:storeId/cart/:storeId
 */
export const getCart = async (req, res, next) => {
  const { storeId } = req.params;
  const { id: userId } = req.user;

  try {
    const [cart] = await Cart.findOrCreate({
      where: { userId, storeId },
      include: [Product],
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 
 * @param {e.Request} req 
 * @param {e.Response} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Add product or delete a product to cart
 * @example POST store/:storeId/cart/:storeId
 */
export const addProductToCart = async (req, res, next) => {
  const { storeId } = req.params;
  const { id: userId } = req.user;
  const { productId, count } = req.body;

  try {
    const [cart] = await Cart.findOrCreate({
      where: { userId, storeId },
      include: [Product],
    });

    if (count === 0) {
      CartItem.destroy({
        where: { cartId: cart.id, productId },
      });
      res.status(httpStatus.OK).json({
        success: true,
        data: `Product removed from cart`,
      });
      return;
    };

    const product = await Product.findOne({
      where: { id: productId, storeId, stock: { [Op.gt]: count } },
    });

    if (!product) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found or not enough stock",
      });
      return;
    };

    await cart.addProduct(product, { through: { count } });

    await cart.reload();

    res.status(httpStatus.OK).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
