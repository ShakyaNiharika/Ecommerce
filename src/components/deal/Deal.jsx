import React from "react";
import "../../styles/deal/Deal.css";
import DealCategory from "../../data/deal/Deal.js";

const Deal = () => {
  return (
    <div className="deal-main">
      {DealCategory.map((items) => {
        return (
          <div className="sub-deal-main" key={items?.id}>
            <div class="daal-left-part">
              <h2>{items?.title}</h2>
            </div>
            <div class="daal-right-part">
              <h2>{items?.offer}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deal;
