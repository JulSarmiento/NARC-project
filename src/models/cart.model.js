import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class Cart extends Model {}
class CartItem extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    }
  },
  {
    sequelize,
    modelName: "cart",
    timestamps: true,
  }
);

CartItem.init(
  {
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "cartItem",
    timestamps: false,
  }
);



export { Cart, CartItem};
