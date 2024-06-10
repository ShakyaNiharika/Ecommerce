import React from "react";
import TopNav from "./topNavbar/TopNav";
import Navbar from "./navMain/Navbar";
import NavMenu from "./navMenu/NavMenu";

const Index = () => {
  return (
    <div>
      <TopNav />
      {/* <SideBar /> */}
      <Navbar />
      <NavMenu />
    </div>
  );
};

export default Index;
