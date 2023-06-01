import { DataTypes } from "sequelize";

import User from "./user.model.js";
import Store from "./store.model.js";
import Product from "./product.model.js";
import Cart from "./cart.model.js";
import Category from "./category.model.js";
import Subcategory from "./subcategory.model.js";
import Order from "./order.model.js";
import OrderStatus from "./orderStatus.model.js";

const FOREIGN_KEY = { allowNull: false, type: DataTypes.UUID };

Category.hasMany(Subcategory, FOREIGN_KEY);
// Category.hasMany(Store);

// Subcategory.belongsTo(Category, FOREIGN_KEY);
// Subcategory.hasMany(Product);

Product.belongsTo(Subcategory, FOREIGN_KEY);
Product.belongsTo(Store, FOREIGN_KEY);

// Product.hasOne(Subcategory, { foreignKey: { name: "subcategoryId", allowNull: false } });
// Product.hasOne(Store, { foreignKey: { name: "storeId", allowNull: false } });

Store.hasMany(Product, FOREIGN_KEY);
Store.belongsTo(Category, FOREIGN_KEY);
// Store.hasMany(Order);
// Store.belongsTo(Category);

// Order.belongsTo(OrderStatus);
// Order.belongsTo(Store);
// Order.belongsTo(User);

// User.hasMany(Order);
// User.hasMany(Cart);

// Cart.belongsTo(User);

export {
  User,
  Store,
  Product,
  Cart,
  Category,
  Subcategory,
  Order,
  OrderStatus,
};
