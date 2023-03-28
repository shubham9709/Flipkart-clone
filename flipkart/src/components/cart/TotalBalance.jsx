import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  Header:{
    padding:"15px 24px",
    background:"#fff",
    borderBottom:"1px solid #f0f0f0",
    color:"#878787"
  },
  container:{
    padding:"15px 24px",
    background:"#fff",
    '& > p':{
      marginBottom:"20px",
      fontSize:"14px"
    },
    '& > h6':{
      marginBottom:"20px"
    }
  },
  Price:{
    float:"right",
  },
  discount:{
    color:"green",
    fontWeight:"550px"
  }
})

const TotalBalance = ({cartItems}) => {
  const [price,setPrice] = useState(0);
  const [discount,setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  },[cartItems]);

  const totalAmount = () => {
    let price = 0, discount=0;
    cartItems.map(item => {
      price+= item.price.mrp;
      discount+= (item.price.mrp - item.price.cost);

    })
    setPrice(price);
    setDiscount(discount);
  }

  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.Header}>
        <Typography>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>Price ({cartItems.length} item)
          <Box component="span" className={classes.Price}>₹{price}</Box>
        </Typography>

        <Typography>Discount
          <Box component="span" className={classes.Price}>₹{discount}</Box>
        </Typography>

        <Typography>Delivery Charges
          <Box component="span" className={classes.Price}>₹40</Box>
        </Typography>

        <Typography variant="h6">Total Amount
          <Box component="span" className={classes.Price}>₹{price-discount +40}</Box>
        </Typography>

        <Typography className={classes.discount}>You will save ₹{discount-40} on this order</Typography>
      </Box>
    </Box>
  )
}

export default TotalBalance;