import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { makeStyles } from "@material-ui/core";
import { lineHeight } from "@mui/system";
import Search from "./Search";
import CustomButtons from "./customButtons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2874f0",
  },
  box: {
    marginLeft: "12%",
    lineHeight: "0",
    textDecoration:"none",
    color:"inherit"
  },
  typo: {
    fontStyle: "italic",
  },
});
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 2,
});

const Header = () => {
  const classes = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.root}>
      <Toolbar style={{ minHeight: "55px" }}>
        <Link to="/" className={classes.box}>
          <img src={logoURL} alt="Flipkart-logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Typography className={classes.typo} style={{ fontSize: 10 }}>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Typography>
            <PlusImage src={subURL} alt="Plus" />
          </Box>
        </Link>
        <Search />
        <Box style={{ margin: "0 auto 0 7%" }}>
          <CustomButtons />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
