import React from "react";
import { fourthShop } from "../../data/shopNow/ShopNow.js";
import "../../styles/shopNowDis/ShopNowDis.css";
import Button from "../button/Button.jsx";

const ShopNowDis = () => {
  return (
    <div className="mainShopNowDis">
      {fourthShop.map((items) => {
        return (
          <div className="outlet" key={items?.id}>
            <img className="fruitsImages" src={items?.image} />
            <h1>{items?.head}</h1>
            <h2>{items?.title}</h2>
            <Button className="shopButton" title="Shop Now" />
          </div>
        );
      })}
    </div>
  );
};

export default ShopNowDis;
