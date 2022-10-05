import { ADD_TO_CART, UPDATE_CART } from "../types/cartTypes";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const UpdateCart = (data) => {
  return {
    type: UPDATE_CART,
    payload: data,
  };
};
