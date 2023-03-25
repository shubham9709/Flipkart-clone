import React from "react";
import axios from "axios";
import * as actionType from "../constants/cartConstant";
const URL = "http://localhost:7000/products";
export const addtocart = (id,quantity) => (dispatch) => {
  try{
    const {data} = axios.get(`${URL}/product/${id}`);
    dispatch({type:actionType.ADD_TO_CART, payload:{...data,quantity}});
  }catch(error)
  {
    dispatch({type:actionType.ADD_TO_CART_ERROR, payload:error.message});
  }
}

export const removefromcart = (id) => (dispatch) => {
  dispatch({type:actionType.REMOVE_FROM_CART, payload: id})
}