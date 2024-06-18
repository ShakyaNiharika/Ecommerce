import React from "react";
import "../../styles/dealCart/DealCart.css";
import cart from "../../data/dealCart/DealCart";
import Button from "../button/Button";
const DealCart = () => {
  return (
    <div className="main-dealCart">
      {cart.map((items) => {
        return (
          <div className="dealcart" key={items?.id}>
            <div className="left-part">
              <img className="left-image" src={items?.image} />
            </div>
            <div className="right-part">
              <h1>{items?.title}</h1>
              <p>{items?.price}</p>
              <hr></hr>
              <p>{items?.productNo}</p>
              <Button className="add-to-cart" title="Add to Cart" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DealCart;
