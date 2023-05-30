import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/postgresql.config.js";

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
        len: [9, 10],
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 50],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [3, 50],
      },
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [9, 10],
      },
    },
    address: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [3, 50],
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    orders: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true,
    },
    cart: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
  }
);

export default Users;
