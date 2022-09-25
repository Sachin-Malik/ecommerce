import axios from "axios";
import { SET_PRODUCTS, SET_ERROR } from "../types/productTypes";

export const setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
};

export const setError = (data) => {
  return {
    type: SET_ERROR,
    payload: data,
  };
};

export const asyncFetchProducts = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_PRODUCT_API)
      .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};
