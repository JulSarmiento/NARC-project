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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    }},
  {
    sequelize,
    modelName: "store",
  }
);


export default Store;
