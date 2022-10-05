import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { asyncFetchProducts } from "../redux/actions/productAction";

import Header from "./SearchBar";
import ItemsList from "./ItemsList";
import Cart from "./Cart";
import CatergorySection from "./CatergorySection";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.items.products);
  return (
    <div className="container-fluid">
      <Header />
      <CatergorySection />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemsList products={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default HomePage;
