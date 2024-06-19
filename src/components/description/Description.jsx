import React from "react";
import desc from "../../data/description/Description.js";
import "../../styles/description/Description.css";
import { Icon } from "@iconify/react";

const Description = () => {
  return (
    <div className="main-description">
      {desc.map((items) => (
        <div className="desc-part">
          <p>{items?.desc}</p>
          <div className="icons">
            <Icon className="star" icon="icon-park-outline:star" />
            <Icon className="star" icon="icon-park-outline:star" />
            <Icon className="star" icon="icon-park-outline:star" />
            <Icon className="star" icon="icon-park-outline:star" />
            <Icon className="star" icon="icon-park-outline:star" />
          </div>

          <h4>{items?.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Description;
