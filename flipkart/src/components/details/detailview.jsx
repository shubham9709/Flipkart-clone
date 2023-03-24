import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import Actionitem from "./Actionitem";
import ProductDetail from "./ProductDetails";
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
  

  return (
    <Box className={classes.Component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitem product={product} />
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12} style={{marginTop:"50px"}}>
            <ProductDetail product={product} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;
