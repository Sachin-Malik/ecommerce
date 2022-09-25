import React from "react";
import "../main.css";

export function Product({ item }) {
  return (
    <div className="myItem card shadow my-2 py-3 mx-2 col-3">
      <img src={item.images[0]} alt="Can't Load" />
      <div className="row my-2">
        <div className="col-6 text-left">{item.title}</div>
        <div className="col-6 text-end">Price: {item.price} Rs</div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn col-12 btn-success" type="button">
            Add
          </button>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <button className="btn col-12 btn-danger" type="button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
