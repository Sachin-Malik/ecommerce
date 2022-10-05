import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncFetchCategories } from "../redux/actions/productAction";

function CatergorySection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchCategories());
  }, [dispatch]);

  var categories = useSelector((state) => state.items.categories);
  console.log(categories);
  categories = categories.slice(0, 7);

  return (
    <div className="row shadow-lg p-3 mb-5 justify-content-center">
      {categories.map((item) => (
        <div className="col text-center">
          <div className="row justify-content-center">
            <img
              className="category_image"
              src={item.image}
              alt="Unable to Load"
            />
          </div>
          <div className="row pt-2">
            <p1 style={{ fontWeight: "600" }}>{item.name}</p1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatergorySection;
