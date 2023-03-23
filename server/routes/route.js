import express from "express";
import getProducts, { getProductByID } from "../controller/product-controller.js";
import { userSignup, userLogIn } from "../controller/user-controller.js";
 
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogIn);
router.get('/products', getProducts);
router.get('/product/:id',getProductByID);
export default router;