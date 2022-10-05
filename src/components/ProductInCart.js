/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCart } from "../redux/actions/cartActions";

function ProductInCart({ item, handleDecrement, handleIncrement }) {
  return (
    <div className="my-5">
      <div className="row justify-content-left align-items-center p-3 shadow rounded">
        <div className="col-3">
          <img
            className="img-fluid"
            src={item.images[0]}
            alt="Can not Load Image"
          />
        </div>
        <div className="col-6 align-self-center">
          <div className="row">
            <h2>{item.title}</h2>
            <p>
              <span className="price-text">{item.price}</span>
              <span> Rs Only</span>
            </p>
            <p>{item.description}</p>
            <p>In {item.category.name}</p>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <button
            onClick={() => handleIncrement(item.id)}
            className="m-2 btn btn-primary"
          >
            +
          </button>
          <button className="btn btn-dark px-5">{item.count}</button>
          <button
            className=" m-2 btn btn-primary "
            onClick={() => handleDecrement(item.id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductInCart;
