import { Box, Button, ButtonGroup } from "@mui/material"
import React from "react";
import { makeStyles } from "@material-ui/core";
import { borderColor } from "@mui/system";

const useStyles = makeStyles({
  styledButtons:{
    borderRadius:"50%",
    borderColor:"#000",
  }
})

const GroupedButton = () => {
  const classes = useStyles();
  return (
    <ButtonGroup style={{marginTop:"30px"}}>
      <Button style={{borderRadius:"50%",marginRight:"2px" }}>-</Button>
      <Button disabled>1</Button>
      <Button style={{borderRadius:"50%",marginLeft:"2px"}}>+</Button>
    </ButtonGroup>
  )
}

export default GroupedButton;