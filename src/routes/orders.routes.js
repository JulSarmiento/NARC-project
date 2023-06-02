import express from 'express';

import { getOrders, getOrder, createOrder } from '../controllers/orders.controller.js';
import authValidator from '../middlewares/auth.validator.js';


const router = express.Router();

router.get('/', authValidator, getOrders);
router.get('/:orderId', authValidator, getOrder),
router.post('/:storeId', authValidator, createOrder);




export default router;