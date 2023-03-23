import React from "react"
import {Box,Menu,Typography,MenuItem} from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const useStyles = makeStyles({
  profile:{
    height: "40%",
    fontSize: "16px",
    textTransform: "none",
    padding: "5px 40px",
    alignItems: "center",
    marginTop: "3px",
  },
  menu:{
    marginTop: '5px',
  },
  text:{
    marginLeft: '18px',
    fontSize: '14px',
  }
})
const Profile = ({account , setAccount}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser = ()=> {
    setAccount('');
  }
  return (
    <>
      <Box>
        <Typography style={{cursor:'pointer'}} className={classes.profile} onClick={handleClick}>
            {account}
        </Typography>
        <Menu
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          className = {classes.menu}
          style={{marginTop: '5px'}}
        >
          <MenuItem onClick={handleClose}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Typography className={classes.text} style={{marginLeft: '18px',fontSize: '14px'}} onClick={logoutUser}>Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}
export default Profile;