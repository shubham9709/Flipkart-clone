//importing styles
import * as React from "react";
import { useEffect } from "react";
import { InputBase, Box, List, ListItem } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  box: {
    background: "#ffffff",
    width: "33%",
    marginLeft: "1%",
    borderRadius: "2px",
    display: "flex",
  },
  listWrapper:{
    backgroundColor:"#FFFFFF",
    color:"#000",
    marginTop:"px"
  }
});

export default function Search() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const getText = (text) => {
    setText(text);
  };
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Box className={classes.box}>
      <InputBase
        style={{
          width: "100%",
          paddingLeft: "20px",
          fontSize: "unset",
          display: "flex",
        }}
        value={text}
        placeholder="Search for products,brands and more"
        onChange={(e) => getText(e.target.value)}
      />
      <Box style={{ color: "#2874f0", padding: "5px" }}>
        <SearchIcon />
      </Box>
      {
        text &&
          <List className={classes.listWrapper} style={{position:"absolute",marginTop:"38px"}}>
            {
              products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                <ListItem>
                  <Link
                  to={`/product/${product.id}`}
                  onClick={() => {setText('')}}
                  style={{textDecoration:"none",color:"inherit"}}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </List>
      }
    </Box>
  );
}
