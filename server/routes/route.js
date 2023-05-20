const express = require("express");
const {
  getProducts,
  getProductByID,
} = require("../controller/product-controller.js");
const { userSignup, userLogIn } = require("../controller/user-controller.js");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogIn);
router.get("/products", getProducts);
router.get("/product/:id", getProductByID);
// export default router;
module.exports = router;
