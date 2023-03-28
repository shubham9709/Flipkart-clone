// import React from "react";
// import axios from "axios";
// import * as actionType from "../constants/cartConstant";
// const URL = "http://localhost:7000";
// export const addtocart = (id,quantity) => (dispatch) => {
//   try{
//     const {data} = axios.get(`${URL}/product/${id}`);
//     dispatch({type:actionType.ADD_TO_CART, payload:{...data,quantity}});
//   }catch(error)
//   {
//     dispatch({type:actionType.ADD_TO_CART_ERROR, payload:error.message});
//   }
// }

// export const removefromcart = (id) => (dispatch) => {
//   dispatch({type:actionType.REMOVE_FROM_CART, payload: id})
// }

import * as actionTypes from '../constants/cartConstant';
import axios from 'axios';

export const addtocart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:7000/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removefromcart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};