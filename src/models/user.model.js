import { Model, DataTypes } from "sequelize";
import {encryptPassword} from "../utils/auth.js";
import sequelize from "../utils/postgresql.config.js";

class User extends Model {
  static login(email, password) {
    return User.findOne({
      where: {
        email,
        password: encryptPassword(password),
      },
    });
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    dni: {
      type: DataTypes.STRING,
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
        len: [3, 50],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
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
    field: 'password',
    validate: {
      notNull: true,
      set(password) {
        this.setDataValue('password', encryptPassword(password))
      }
    }
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 200],
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "client",
      values: ["admin", "client", "seller"],
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  {
    sequelize,
    modelName: "user",
}
);

export default User;
