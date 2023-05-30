import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class Subcategory extends Model {}

Subcategory.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }

}, {
  sequelize,
  modelName: "Subcategory",
  timestamps: false
});

export default Subcategory;