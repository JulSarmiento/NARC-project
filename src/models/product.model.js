import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class Product extends Model {}

Product.init(
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
      validate: {
        isAlpha: true,
        len: [3, 50],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 50],
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1, 10],
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1, 10],
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 50],
      },
    },
  },
  {
    sequelize,
    modelName: "Product",
    timestamps: false,
  }
);

export default Product;
