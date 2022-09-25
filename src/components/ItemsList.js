import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Product } from "./Product";

function ItemsList({ products }) {
  return (
    <div className="row justify-content-evenly">
      {products.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
}

export default ItemsList;
