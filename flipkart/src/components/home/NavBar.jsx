import React from "react";
import { navData } from "../../Data/NavData";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  component:{
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflow:"hidden",
    [theme.breakpoints.down('md')]:{
      margin:"0"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box style={{background:"#fff",}}>
      <Box className={classes.component}
      >
        {navData.map((data) => (
          <Box
            style={{ padding: "12px 8px", textAlign: "center" }}
            key={data.key}
          >
            <img src={data.url} alt="nav" style={{ width: "64px" }} />
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "600px",
                fontFamily: "inherit",
              }}
            >
              {data.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
