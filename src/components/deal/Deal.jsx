import React from "react";
import "../../styles/deal/Deal.css";
import DealCategory from "../../data/deal/Deal.js";

const Deal = () => {
  return (
    <div className="deal-main">
      {DealCategory.map((items) => {
        return <h1 key={items?.id}>{items?.title}</h1>;
      })}
    </div>
  );
};

export default Deal;
