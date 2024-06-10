import React from "react";
// import TopNav from "../../components/navbar/TopNav"; // Adjusted the import path
// import SideBar from "../../components/SideBar";
// import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Index from "../../components/navbar/Index";
import Deal from "../../components/deal/Deal";
const Home = () => {
  return (
    <div>
      <Index />
      <Hero />
      <Category />
      <Deal />
    </div>
  );
};

export default Home;
