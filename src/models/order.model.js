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
  coupon: {
    type: DataTypes.STRING,
    allowNull: true
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pending", "completed", "cancelled"],
    defaultValue: "pending"
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  user: {
    type: DataTypes.JSON,
    allowNull: false
  },
  storeId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  deliveryAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.ENUM,
    values: ["cash", "card"],
    defaultValue: "cash"
  }
}, {
  sequelize,
  modelName: "order"
});

export default Order;
