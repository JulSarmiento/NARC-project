import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class OrderStatus extends Model {}

OrderStatus.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    // modelName: "OrderStatus",
    timestamps: false,
  }
);

export default OrderStatus;
