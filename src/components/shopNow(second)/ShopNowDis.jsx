import React from "react";
import { fourthShop } from "../../data/shopNow/ShopNow.js";
import "../../styles/shopNowDis/ShopNowDis.css";

const ShopNowDis = () => {
  return (
    <div className="mainShopNow-dis">
      {fourthShop.map((items) => (
        <div className="outlet" key={items?.id}>
          <img className="fruitsImages" src={items?.image} />
          <h1>{items?.head}</h1>
          <h2>{items?.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ShopNowDis;
