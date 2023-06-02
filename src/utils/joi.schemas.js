import Joi from "joi";

// User Schema
export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  lastname: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().min(3).max(50).required(),
  birthdate: Joi.date().required(),
  password: Joi.string()
    .min(3)
    .max(50)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  phone: Joi.string().min(9).max(10).required(),
  address: Joi.string().min(3).max(200).required(),
  role: Joi.boolean().default(false).optional(),
  status: Joi.boolean().required(true).optional(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  lastname: Joi.string().min(3).max(50).optional(),
  email: Joi.string().email().min(3).max(50).optional(),
  birthdate: Joi.date().optional(),
  password: Joi.string()
    .min(3)
    .max(50)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .optional(),
  phone: Joi.string().min(9).max(10).optional(),
  address: Joi.string().min(3).max(200).optional(),
  role: Joi.boolean().optional(),
  status: Joi.boolean().optional(),
});

// Store Schema

export const createStoreSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  image: Joi.string().required(),
  categoryId: Joi.string().required()
});

export const updateStoreSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  image: Joi.string().optional(),
  categoryId: Joi.string().optional()
});

// Product Schema

export const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(20).max(500).required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().min(0).required(),
  image: Joi.string().required(),
  storeId: Joi.string().required(),
  subcategoryId: Joi.string().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  description: Joi.string().min(20).max(500).optional(),
  price: Joi.number().min(0).optional(),
  stock: Joi.number().min(0).optional(),
  image: Joi.string().optional(),
  storeId: Joi.string().optional(),
  subcategoryId: Joi.string().optional(),
});

// Order Schema

export const createOrderSchema = Joi.object({
  coupon: Joi.number().optional(),
  details: Joi.string().min(3).max(500).required(),
  status: Joi.string().valid("Pending", "Payment Verified","Processing", "Shipped", "Delivered","cancelled").required(),
  deliveryAddress: Joi.string().min(3).max(200).default().optional(),
  paymentMethod: Joi.string().valid("cash", "card").default("cash").optional()
});

export const updateOrderSchema = Joi.object({
  status: Joi.string().valid("Pending", "Payment Verified","Processing", "Shipped", "Delivered","cancelled").optional()
});

// Cart and CartItem Schema

export const createCartItemSchema = Joi.object({
  count: Joi.number().min(1).required(),
  productId: Joi.string().required(),
});

export const createCartSchema = Joi.object({
  userId: Joi.string().required(),
  storeId: Joi.string().required(),
  products: Joi.array().items(createCartItemSchema).required(),
});

// Subcategory Schema

export const createSubcategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  categoryId: Joi.string().required(),
});

export const updateSubcategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  categoryId: Joi.string().optional()
});

// Category Schema

export const createCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required()
});

export const updateCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).optional()
});
