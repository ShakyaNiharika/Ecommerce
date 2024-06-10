import React from "react";
import "../../../styles/navMenu/NavMenu.css";
import { Icon } from "@iconify/react";
import { Select, MenuItem } from "@mui/material";

const NavMenu = () => {
  return (
    <div className="Nav_menu">
      <ul>
        <Icon className="graphic" icon="icon-park-outline:graphic-stitching" />
        <li className="Shop">Shop By Department</li>
        <li>Home</li>
        <li>Product</li>
        <li>Collection</li>
        <li>Blog</li>
        <li>Pages</li>
        {/* <Select
          sx={{
            marginTop: 35,
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value={1}>Red</MenuItem>
          <MenuItem value={2}>Black</MenuItem>
          <MenuItem value={3}>Blue</MenuItem>
          <MenuItem value={4}>Green</MenuItem>
          <MenuItem value={5}>Yellow</MenuItem>
        </Select> */}
      </ul>
    </div>
  );
};

export default NavMenu;
