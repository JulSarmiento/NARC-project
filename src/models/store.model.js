import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class Store extends Sequelize.Model {}

Store.init(
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
      validate: {
        len: [3, 50],
      },
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Other",
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }},
  {
    sequelize,
    modelName: "Store",
    timestamps: false,
  }
);


export default Store;
