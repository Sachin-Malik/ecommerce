import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemsList from "./ItemsList";
import { asyncFetchProducts } from "../redux/actions/productAction";

import Header from "./SearchBar";
import CatergorySection from "./CatergorySection";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  return (
    <div className="container-fluid">
      <Header />
      <CatergorySection />
      <ItemsList products={products} />
    </div>
  );
}

export default HomePage;
