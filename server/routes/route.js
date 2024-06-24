import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts } from '../controller/product-controller.js';

const router = express.Router();
router.post('/signup', userSignup)
router.post('/login', userLogin);

router.get('/products', getProducts);   //if we will hit api with end point /products then it will provide us all the data from database

export default router;