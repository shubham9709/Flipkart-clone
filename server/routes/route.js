import express from "express";
import getProducts from "../controller/product-controller.js";
import { userSignup, userLogIn } from "../controller/user-controller.js";
 
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogIn);
router.get('/products', getProducts);

export default router;