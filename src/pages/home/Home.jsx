import React from "react";
// import TopNav from "../../components/navbar/TopNav"; // Adjusted the import path
// import SideBar from "../../components/SideBar";
// import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Index from "../../components/navbar/Index";
import Deal from "../../components/deal/Deal";
import DealCart from "../../components/dealCart/DealCart";
import ShopNow from "../../components/shopNow/ShopNow";
import Fotter from "../../components/fotter/Fotter";
import Description from "../../components/description/Description";
import ShopNowDis from "../../components/shopNow(second)/ShopNowDis";
const Home = () => {
  return (
    <div>
      <Index />
      <Hero />
      <Category />
      <Deal />
      <DealCart />
      <ShopNow />
      <Description />
      <ShopNowDis />
      <Fotter />
    </div>
  );
};

export default Home;
