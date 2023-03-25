import React from "react";
import { Box, Button } from "@mui/material";
import {makeStyles} from "@material-ui/core"
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { addtocart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles({
  leftContainer:{
    padding: "40px 0 0 80px",
    minWidth:"40%"
  },

  image:{
    padding:"15px"
  },

  styledButton:{
    width:"48%",
    height:"50px",
    borderRadius:"3px"
  }
})

const Actionitem = ({product}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = product;
  const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addtocart(id,quantity));
    navigate("/cart");
  }

  return (
    <Box className={classes.leftContainer}>
      
        <Box style={{padding:"15px 20px",border: "1px solid #f0f0f0",width:"90%"}}>
          <img src={product.detailUrl} alt="product" className={classes.image} />
        </Box>
        <Button variant="contained" style={{marginRight:"10px", backgroundColor:"#ff9f00"}} onClick={() => addItemToCart()} className={classes.styledButton} ><ShoppingCartIcon />Add to Cart</Button>
        <Button variant="contained" style={{backgroundColor:"#fb541b"}} className={classes.styledButton} ><FlashOnIcon />Buy Now</Button>
      
    </Box>
  )
}

export default Actionitem;