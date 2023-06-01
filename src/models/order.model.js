import { Model, DataTypes } from "sequelize";
import  sequelize  from "../utils/postgresql.config.js";

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
  modelName: "order",
  timestamps: false
});

export default Order;
