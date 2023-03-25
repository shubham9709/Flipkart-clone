import React from "react";
import {Box} from "@mui/material";
import { useSelector } from "react-redux";
const Cart = () => {

  const {cartItems}=useSelector(state => state.cart);

  return (
    <Box>Hello from cart</Box>
  )
}
export default Cart;