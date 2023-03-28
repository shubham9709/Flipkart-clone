import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TotalBalance from "./TotalBalance";
import CartItem from "./CartItem";
import { makeStyles } from "@material-ui/core";
import EmptyCart from "./EmptyCart";

const useStyles = makeStyles(theme =>({
  container: {
    padding: "30px 135px",
    [theme.breakpoints.down('md')]:{
      padding:"15px 0",
    }
  },
  Header: {
    padding: "15px 24px",
    background: "#fff",
  },
  buttonWrapper: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
  },
  leftContainer:{
    paddingRight:"15px",
    [theme.breakpoints.down('md')]:{
      marginBottom:"15px",
    }
  }
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const classes = useStyles();
  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.container}>
          <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftContainer}>
            <Box className={classes.Header}>
              <Typography>My Cart({cartItems.length})</Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <Box className={classes.buttonWrapper}>
              <Button
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  background: "#fb641b",
                  color: "#fff",
                  width:"250px",
                  height:"51px",
                  borderRadius:"3px"    
                }}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;
