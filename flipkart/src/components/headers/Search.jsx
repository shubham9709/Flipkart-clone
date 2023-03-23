//importing styles
import * as React from "react";
import { InputBase, Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { borderRadius } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
const useStyles = makeStyles({
  box: {
    background: "#ffffff",
    width: "33%",
    marginLeft: "1%",
    borderRadius: "2px",
    display: "flex",
  },
});

export default function Search() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <InputBase
        style={{
          width: "100%",
          paddingLeft: "20px",
          fontSize: "unset",
          display: "flex",
        }}
        placeholder="Search for products,brands and more"
      />
      <Box style={{ color: "#2874f0", padding: "5px" }}>
        <SearchIcon />
      </Box>
    </Box>
  );
}
