import React from "react";
import "../../styles/button/Button.css";

const Button = (props) => {
  const { className, title } = props;

  return (
    <div>
      <button className={className}>{title}</button>
    </div>
  );
};

export default Button;
