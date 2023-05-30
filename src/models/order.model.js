import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/postgresql.config.js";
import { Products } from "./products.model.js";
import { Store } from "./stores.model.js";
import { User } from "./user.model.js";
import { OrderStatus } from "./orderStatus.model.js";

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
}, {
  sequelize,
  modelName: "Order",
  timestamps: false
});




