import { Box } from "@mui/material";
import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";

const DetailView = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() =>{
    dispatch(getProductDetails(id));
  },[dispatch ,id]);
  return (
    <Box>
      Hello
    </Box>
  )
}

export default DetailView;