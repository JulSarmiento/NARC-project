import httpStatus from "http-status";

import { User, Order, Cart, Product } from "../models/index.js";

// GET list all users
export const getUsers = async (_req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(httpStatus.OK).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// GET user by id
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: [{ model: Order }],
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// POST create user
export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// PATCH update user
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.update(req.body, {
      where: { id },
    });

    const updatedUser = await User.findByPk(id);
    res.status(httpStatus.OK).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE user
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findByPk(id);
    await User.destroy({
      where: { id },
    });

    res.status(httpStatus.OK).json({
      success: true,
      message: `Deleted user: ${userToDelete.name} ${userToDelete.lastName}.`,
    });
  } catch (error) {
    next(error);
  }
};

// CART

// GET all carts
export const getCart = async (_req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{ model: User }, { model: Product }],
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE or CREATE cart
export const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOrCreate({
      where: { userId: id },
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
