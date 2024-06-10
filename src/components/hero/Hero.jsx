import React from "react";
import fruit from "../../assets/images/fruits.webp";
import sideimage1 from "../../assets/images/sideimage.webp";
import sideimage2 from "../../assets/images/biscuit.webp";
import "../../styles/hero/Hero.css";
import { herodata, herodata2, herodata3 } from "../../data/hero.js";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="hero-main">
      <img className="fruit-image" src={fruit} />
      {herodata.map((items) => {
        return (
          <div className="Items" key={items?.id}>
            <p>{items?.title}</p>
            <h1>{items?.heading}</h1>
            <h2>{items?.discount}</h2>
          </div>
        );
      })}
      <Button className="button" title="Shop Now" />

      <div className="semi-fruit-image">
        <img className="sideimage1" src={sideimage1} />
        {herodata2.map((items) => {
          return (
            <div className="side1" key={items.id}>
              <p>{items?.title}</p>
              <h1>{items?.heading}</h1>
            </div>
          );
        })}
        {/* <Button className="button" title="Shop Now" /> */}

        <img className="sideimage2" src={sideimage2} />
        {herodata3.map((items) => {
          return (
            <div className="side2" key={items.id}>
              <p>{items?.title}</p>
              <h1>{items?.heading}</h1>
            </div>
          );
        })}
        {/* <Button className="button" title="Shop Now" /> */}
      </div>
    </div>
  );
};

export default Hero;
