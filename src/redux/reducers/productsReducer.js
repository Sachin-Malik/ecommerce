import { SET_ERROR, SET_PRODUCTS } from "../types/productTypes";

const initialState = {
  isLoading: false,
  products: [],
  error: "",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
