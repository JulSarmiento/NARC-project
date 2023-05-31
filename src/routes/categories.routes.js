import express from 'express';

import { getCategories, getSubCategories, getSubCategoryByCategory } from '../controllers/category.controller.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/subcategories', getSubCategories);
router.get('/subcategories/:categoryId', getSubCategoryByCategory);


export default router;