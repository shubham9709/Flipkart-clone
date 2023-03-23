import React from "react";
import { Box } from "@mui/material";
import Slide from "./Slide";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  leftContainer:{
    width:"86%",
    [theme.breakpoints.down('md')]:{
      width:"100%"
    }
  },

  rightContainer:{
    backgroundColor:"#FFFFFF",
    padding:"10px",
    marginTop:"10px",
    marginLeft:"10px",
    width:"14%",
    textAlign:"center",
    [theme.breakpoints.down('md')]:{
      display:"none",
    }
  }
}));

const Midslide = ({products, titile, timer}) => {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  const classes = useStyles();
  return(
    <Box style={{display:"flex"}}>
      <Box className={classes.leftContainer}>
        <Slide products={products} titile={titile} timer={timer}/>
      </Box>
      <Box className={classes.rightContainer}>
        <img src={adURL} alt="ad" style={{width:"230px",height:"98%"}} />
      </Box>
    </Box>
  )
}

export default Midslide;