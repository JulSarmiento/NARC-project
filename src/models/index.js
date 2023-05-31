import User from "./user.model.js";
import Store from "./store.model.js";
import Product from "./product.model.js";
import Cart from "./cart.model.js";
import Category from "./category.model.js";
import Subcategory from "./subcategory.model.js";
import Order from "./order.model.js";
import OrderStatus from "./orderStatus.model.js";

Category.hasMany(Subcategory);
Subcategory.belongsTo(Category);
Subcategory.hasMany(Product, { foreignKey: 'subcategoryId' });
Product.belongsTo(Subcategory, { foreignKey: 'subcategoryId' });
Store.hasMany(Product);
Product.belongsTo(Store);
Store.hasMany(Order);
Order.belongsTo(Store);
User.hasMany(Order);
Order.belongsTo(User);
Order.belongsTo(OrderStatus);
User.hasMany(Cart);
Cart.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
Category.hasMany(Store);
Store.belongsTo(Category);
Store.hasMany(Product, { foreignKey: 'storeId' });
Product.belongsTo(Store, { foreignKey: 'storeId' });
Store.hasMany(Order);
Order.belongsTo(Store);

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
