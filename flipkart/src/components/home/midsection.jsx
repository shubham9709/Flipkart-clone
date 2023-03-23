import React from "react";
import {imageURL} from "../../Data/NavData";
import {Grid} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  image:{
    marginTop:"10px",
    width:"100%",
    display:"flex",
    justifyContent:"spaceBetween",
    [theme.breakpoints.down('md')]:{
      objectFit:"cover",
      height:"120px"
    }
  }
}));

const Midsection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  const classes = useStyle();
  return (
    
    <>
      <Grid container style={{marginTop:"10px"}}>
        {
          imageURL.map(image =>(
            <Grid lg={4} md={4} sm={12} xs={12} item>
              <img src={image} alt="banner" style={{width:"100%"}} />
            </Grid>
          ))
        }
      </Grid>
      <img src={url} alt="covid" className={classes.image} />
    </>
  )
}

export default Midsection;