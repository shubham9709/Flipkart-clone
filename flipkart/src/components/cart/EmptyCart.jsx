import React from "react";
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component:{
    width:"80%",
    height:"65vh",
    background:"#fff",
    margin:"80px 140px"
  },
  container:{
    textAlign:"center",
    paddingTop:"80px"
  }
})

const EmptyCart = () => {
  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} alt="EmptyCart" style={{width:"15%",paddingBottom:"20PX"}} />
        <Typography>Your cart is empty</Typography>
        <Typography>Add items to it now</Typography>
      </Box>
    </Box>
  )
}

export default EmptyCart;