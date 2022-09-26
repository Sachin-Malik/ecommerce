import React from "react";

import { Product } from "./Product";

function ItemsList({ products }) {
  products = products.slice(0, 21);
  return (
    <div className="row my-5 justify-content-evenly">
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemsList;
