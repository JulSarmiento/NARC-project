import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/postgresql.config.js';

class Category extends Model {};

Category.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Category',
  timestamps: false
});

export default Category;