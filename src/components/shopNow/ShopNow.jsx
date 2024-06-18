import React from "react";
import "../../styles/shopNow/ShopNow.css";
import {
  firstShop,
  secondShop,
  thirdShop,
} from "../../data/shopNow/ShopNow.js";

const ShopNow = () => {
  return (
    <div className="main-ShopNow">
      {firstShop.map((item) => (
        <div className="left" key={item?.id}>
          <img className="cabage" src={item?.image} alt={item?.head} />
          <h1>{item?.head}</h1>
          <h2>{item?.title}</h2>
        </div>
      ))}

      {secondShop.map((item) => (
        <div className="middle" key={item?.id}>
          <img className="soda" src={item?.image} alt={item?.head} />
          <h2>{item?.head}</h2>
          <h1>{item?.title}</h1>
        </div>
      ))}

      {thirdShop.map((item) => (
        <div className="right" key={item?.id}>
          <img className="tomato" src={item?.image} alt={item?.head} />
          <h2>{item?.head}</h2>
          <h1>{item?.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ShopNow;
