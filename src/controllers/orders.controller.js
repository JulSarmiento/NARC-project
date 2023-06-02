import httpStatus from "http-status";

import { Order, Store, User , Product, Cart, CartItem } from "../models/index.js";

export const getOrders = async (req, res, next) => {
  const { storeId } = req.params;
  try {
    const orders = await Order.findAll();
    
    res.status(httpStatus.OK).json({
      success: true,
      data: orders,
    });

  } catch (error) {
    next(error);
  };
};

export const getOrder = async (req, res, next) => {
  const { storeId, orderId } = req.params;
  const { id: userId } = req.user;
  try {
    const order = await Order.findOne({
      where: { id: orderId, storeId },
      include: [User],
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

export const createOrder = async (req, res, next) => {
  const { storeId } = req.params;
  const { id: userId } = req.user;

  const { coupon, details, deliveryAddress, paymentMethod } = req.body;
  try {

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

    const total = cart.products.reduce((acc, { price, cartItem }) => acc + price * cartItem.count, 0);

    const order = await Order.create({
      coupon,
      details,
      storeId: cart.storeId,
      userId: req.user.id,
      user: req.user.toJSON(),
      total,
      deliveryAddress,
      deliveryDate: new Date(),
      paymentMethod,
      products: cart.products.map(({ id, name, price, cartItem }) => ({
        id,
        name,
        price,
        count: cartItem.count,
      })),

    });
    
    await Promise.all(cart.products.map(async ({ id, cartItem}) => {
      const product = await Product.findByPk(id);
      product.stock -= cartItem.count;
      return product.save();
    }));
    
    await CartItem.destroy({
      where: { cartId: cart.id },
    });
    await cart.destroy();

    res.status(httpStatus.CREATED).json({
      success: true,
      data: order,
    });

  }
  catch (error) {
    next(error);
  }
};


