import {Cart, CartItem, Product} from "../models/index.js";

export const getCart = async (req, res, next) => {
  const { storeId } = req.params;
  const {id: userId} = req.user;

  try {
    const cart = await Cart.findOrCreate({
      where: { userId, storeId },
      include: [Product],
    });

    res.status(200).json(cart);

  } catch (error) {
    next(error);
  }
};

export const addProductToCart = async (req, res, next) => {
  const { storeId } = req.params;
  const {id: userId} = req.user;
  
  const { productId, count } = req.body;
  try {
    const [cart] = await Cart.findOrCreate({
      where: { userId, storeId },
      include: [Product],
    });

    const [cartItem] = await CartItem.findOrCreate({
      where: { cartId: cart.id, productId }
    });

    if(count === 0) {
      await cartItem.destroy();

      res.status(200).json({
        success: true,
        message: "Product removed from cart"
      });
      return;
    }

    cartItem.count = count;
    await cartItem.save();

    res.status(200).json({
      success: true,
      data: cartItem
    });

  } catch (error) {
    next(error);
  }
}
