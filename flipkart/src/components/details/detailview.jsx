import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import Actionitem from "./Actionitem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Component: {
    backgroundColor: "#f2f2f2",
  },

  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
  },
});

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  useEffect(() => {
    if (product && id != product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Box className={classes.Component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitem product={product} />
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12} style={{marginTop:"50px"}}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
            >
              8 ratings & 5 reviews
              <Box component="span">
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: "77px", marginLeft: "20px" }}
                />
              </Box>
            </Typography>
            <Typography>
              <Box component="span" style={{fontSize:"28px"}}>₹{product.price.cost}</Box>&nbsp;&nbsp;
              <Box component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{color:"#388e3c"}}>{product.price.discount}</Box>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;
