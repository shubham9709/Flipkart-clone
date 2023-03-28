//importing styles
import * as React from "react";
import { Box, Button, Typography, Badge } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { fontSize } from "@mui/system";
import LoginDialog from "../Login/loginDialogue";
import { useState,useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import {Link} from "react-router-dom";
import Profile from "./profile";
import { useSelector } from "react-redux";
const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    [theme.breakpoints.down("md")]:{
      display:"block"
    }
  },
  loginbutton: {
    marginRight: "40px",
    background: "#ffffff",
    color: "#ffffff",
  },
}));
export default function CustomButtons() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { acnt, setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  };
  const {cartItems} = useSelector(state=> state.cart);
  
  return (
    <Box className={classes.box}>
    {
      acnt ? <Profile account = {acnt} setAccount = {setAccount} /> :
    
      <Button
        variant="contained"
        onClick={() => openDialog()}
        sx={{
          marginRight: "40px",
          background: "#ffffff",
          color: "#2874f0",
          height: "32px",
          fontSize: "16px",
          textTransform: "none",
          padding: "5px 40px",
          borderRadius: "2px",
          fontWeight: "600px",
          boxShadow: "none",
          alignItems: "center",
          marginTop: "3px",
        }}
      >
        Login
      </Button>
    }
      <Typography
        style={{
          marginRight: "40px",
          fontSize: "16px",
          width: "135px",
          marginTop: "6px",
          alignItems: "center",
          height: "10px",
          fontWeight: "bold",
        }}
      >
        Become a Seller
      </Typography>
      <Typography
        style={{
          marginRight: "40px",
          fontSize: "16px",
          marginTop: "6px",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        More
      </Typography>

      <Link to="/cart"
        style={{ marginRight: "40px", display: "flex", alignItems: "center",marginTop :'1px', textDecoration:"none", color:"#fff" }}
      >
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon fontSize= 'small' />
        </Badge>
        <Typography style={{ alignItems: "center", fontSize: "16px",fontWeight: "bold", marginLeft:"10px" }}>
          Cart
        </Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
