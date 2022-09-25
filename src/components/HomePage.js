import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemsList from "./ItemsList";
import { asyncFetchProducts } from "../redux/actions/productAction";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  return (
    <div className="container row ">
      <ItemsList products={products} />
    </div>
  );
}

export default HomePage;
