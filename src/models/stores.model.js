import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../utils/postgresql.config.js";
import { Category } from "./category.model.js";
import {Products} from "./products.model.js";
import {Order} from "./order.model.js";

class Store extends Sequelize.Model {}

Store.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlpha: true,
      len: [3, 50]
    }
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  sequelize,
  modelName: "Store",
  timestamps: false
});

Category.hasMany(Store);
Store.belongsTo(Category);
Store.hasMany(Products);
Products.belongsTo(Store);
Store.hasMany(Order);
Order.belongsTo(Store);

export { Store };