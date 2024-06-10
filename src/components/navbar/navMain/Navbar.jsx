import React from "react";
import logo from "../../../assets/images/logo.webp";
import "../../../styles/navbar/Navbar.css";
const Navbar = () => {
  return (
    <div class="navbar-main">
      <img class="logo" src={logo} />

      <input className="input-field" type="text" placeholder="Search" />
      <div class="rightCorner">
        <p>Account Login </p>
        <p>Total</p>
      </div>
    </div>
  );
};

export default Navbar;
