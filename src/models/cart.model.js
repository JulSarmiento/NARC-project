import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1, 10],
      },
    },
  },
  {
    sequelize,
    // modelName: "Cart",
    timestamps: false,
  }
);



export default Cart;
