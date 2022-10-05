import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductInCart from "./ProductInCart";
import { UpdateCart } from "../redux/actions/cartActions";

function Cart() {
  var cartItems = useSelector((state) => state.cart.cartItems);
  const [items, setItems] = useState(cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === productId) {
        cartItems[i]["count"]++;
        break;
      }
    }
    const newCart = [...cartItems];
    dispatch(UpdateCart(newCart));
    setItems(newCart);
  };

  const handleDecrement = (productId) => {
    console.log(items);
    const newCart = [];
    for (let i = 0; i < items.length; i++) {
      if (productId === items[i].id) {
        if (items[i]["count"] === 1) continue;
        items[i]["count"]--;
        newCart.push(items[i]);
      } else {
        newCart.push(items[i]);
      }
    }
    dispatch(UpdateCart(newCart));
    setItems(newCart);
  };

  return (
    <div className="container">
      <div>
        <div className="">
          <h1>Cart</h1>
        </div>
        {!items.length && <div>No Items</div>}
        {items.map((item) => {
          return (
            <ProductInCart
              item={item}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
