import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  items: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
