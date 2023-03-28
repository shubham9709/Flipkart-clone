import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
import { useDispatch } from "react-redux";
import {removefromcart} from "../../redux/actions/cartActions"

const useStyles = makeStyles({
  component:{
    border:"1px solid #f0f0f0",
    display:"flex",
    background:"#fff"
  },
  leftContainer:{
    margin:"20px",
    display:"flex",
    flexDirection:"column"
  },
  sellertext:{
    color:"#878787",
    fontSize:"14px",
    
  },
  button:{
    marginTop:"20px",
    fontWeight:"600",
    color:"#000",
    fontSize:"16px"
  }
})

const CartItem = ({item}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeItemsFromCart = (id) => {
    dispatch(removefromcart(id));
  }
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Box className={classes.component}>
      <Box className={classes.leftContainer}>
        <img src={item.url} alt="product" style={{height:"110px",width:"110px"}} />
        <GroupedButton />
      </Box>
      <Box style={{margin:"20px"}}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Typography style={{marginTop:"10px"}} className={classes.sellertext}>Seller:RetailNet
          <Box component="span"><img src={fassured} alt="flipkart-assured" style={{width:"60px",marginLeft:"10px"}}/></Box>
        </Typography>
        <Typography style={{margin:"20px 0"}}>
        <Box component="span" style={{ fontSize: "18px",fontWeight:"600" }}>
          ₹{item.price.cost}
        </Box>
        &nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{item.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {item.price.discount}
        </Box>
        
      </Typography>
      <Button onClick={()=>{removeItemsFromCart(item.id)}} style={{marginTop:"20px",fontWeight:"600",color:"#000",fontSize:"16px"}}>Remove</Button>
      </Box>
    </Box>
  )
}
export default CartItem;