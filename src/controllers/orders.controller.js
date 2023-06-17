import httpStatus from "http-status";

import { Order, User, Product, Cart, CartItem } from "../models/index.js";

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns
 * @description Get all orders
 * @example GET /store/:storeId/orders
 */
export const getOrders = async (req, res, next) => {
  const { storeId } = req.params;
  try {
    const orders = await Order.findAll({
      where: { storeId },
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns 
 * @description Get an order by id
 * @example GET /store/:storeId/orders/:orderId
 */
export const getOrder = async (req, res, next) => {
  const { storeId, orderId } = req.params;
  try {
    const order = await Order.findOne({
      where: { id: orderId, storeId },
    });

    if (!order) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 
 * @param {e.Request} req 
 * @param {e.Respond} res 
 * @param {e.NextFunction} next 
 * @returns 
 * @description Create an order
 * @example POST /store/:storeId/orders
 */
export const createOrder = async (req, res, next) => {
  const { storeId } = req.params;
  const { id: userId, address } = req.user;

  console.log('req.user', req.user)

  const user = await User.findByPk(userId);

   let { coupon, details, deliveryAddress, paymentMethod } = req.body;

  try {
    if(!deliveryAddress){
      deliveryAddress = address;
    }

    const cart = await Cart.findOne({
      where: { userId, storeId },
      include: [Product],
    });

    if (!cart) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Cart not found",
      });
    }

    const total = cart.products.reduce(
      (acc, { price, cartItem }) => acc + price * cartItem.count,
      0
    );

    const order = await Order.create({
      coupon,
      details,
      storeId: cart.storeId,
      userId: user.id,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      total,
      deliveryAddress: deliveryAddress || user.address,
      deliveryDate: new Date(),
      paymentMethod,
      products: cart.products.map(({ id, name, price, cartItem }) => ({
        id,
        name,
        price,
        count: cartItem.count,
      })),
    });

    await Promise.all(
      cart.products.map(async ({ id, cartItem }) => {
        const product = await Product.findByPk(id);
        product.stock -= cartItem.count;
        return product.save();
      })
    );

    await CartItem.destroy({
      where: { cartId: cart.id },
    });
    await cart.destroy();

    res.status(httpStatus.CREATED).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};
