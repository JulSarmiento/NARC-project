import errorHandler from "./error.handler.js";
import notPageFound from "./page.handler.js";
import validateModel from "./joi.validator.js";
import authentication from "./authentication.js";
import rolValidator from "./rol.validator.js";
import {
  createUserSchema,
  updateUserSchema,
  createStoreSchema,
  updateStoreSchema,
  createProductSchema,
  updateProductSchema,
  createCategorySchema,
  updateCategorySchema,
  createSubcategorySchema,
  updateSubcategorySchema,
  createOrderSchema,
  updateOrderSchema,
  createCartSchema
} from "../utils/joi.schemas.js";


const validateCreateUser = validateModel(createUserSchema);
const validateUpdateUser = validateModel(updateUserSchema);
const validateCreateStore = validateModel(createStoreSchema);
const validateUpdateStore = validateModel(updateStoreSchema);
const validateCreateProduct = validateModel(createProductSchema);
const validateUpdateProduct = validateModel(updateProductSchema);
const validateCreateCategory = validateModel(createCategorySchema);
const validateUpdateCategory = validateModel(updateCategorySchema);
const validateCreateSubcategory = validateModel(createSubcategorySchema);
const validateUpdateSubcategory = validateModel(updateSubcategorySchema);
const validateCreateOrder = validateModel(createOrderSchema);
const validateUpdateOrder = validateModel(updateOrderSchema);
const validateCreateCart = validateModel(createCartSchema);


export { 
  errorHandler, 
  notPageFound,
  authentication,
  rolValidator,
  validateCreateUser,
  validateUpdateUser,
  validateCreateStore,
  validateUpdateStore,
  validateCreateProduct,
  validateUpdateProduct,
  validateCreateCategory,
  validateUpdateCategory,
  validateCreateSubcategory,
  validateUpdateSubcategory,
  validateCreateOrder,
  validateUpdateOrder,
  validateCreateCart,
};
