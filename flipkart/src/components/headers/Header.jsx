import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/styles";
import { makeStyles } from "@material-ui/core";
import Search from "./Search";
import CustomButtons from "./customButtons";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2874f0",
  },
  box: {
    marginLeft: "12%",
    lineHeight: "0",
    textDecoration: "none",
    color: "inherit",
  },
  typo: {
    fontStyle: "italic",
  },
  IconWrapper: {
    visibility: "hidden",
    [theme.breakpoints.down("md")]: {
      visibility: "visible",
    },
  },
  CustomButtonWrapper: {
    margin: "0 auto 0 7%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box syle={{width:"200px"}} onClose={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className={classes.root}>
      <Toolbar style={{ minHeight: "55px" }}>
        <IconButton
          color="inherit"
          onClick={handleOpen}
          className={classes.IconWrapper}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
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
        <Box style={{}} className={classes.CustomButtonWrapper}>
          <CustomButtons />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
