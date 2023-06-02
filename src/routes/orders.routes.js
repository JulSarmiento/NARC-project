import express from 'express';

import { getOrders } from '../controllers/orders.controller.js';
import authValidator from '../middlewares/auth.validator.js';


const router = express.Router();

router.get('/', authValidator, getOrders);




export default router;