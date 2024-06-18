import React from "react";
import head from "../../data/fotter/Fotter.js";
import "../../styles/fotter/Fotter.css";
console.log(head, "hereee");
const Fotter = () => {
  return (
    <div className="main-fotter">
      <div className="head_Sec">
        {head.map((items) => (
          <h2 key={items?.id}>{items?.title}</h2>
        ))}
        <input className="emailField" type="text" placeholder="Email" />
      </div>
    </div>
  );
};

export default Fotter;
