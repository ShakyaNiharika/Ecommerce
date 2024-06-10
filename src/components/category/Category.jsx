import React from "react";
import { categoriesHead, categories } from "../../data/category/category.js";
import "../../styles/category/Category.css";
import button from "../../components/button/Button.jsx";

const Category = () => {
  return (
    <div className="main-category">
      {categoriesHead.map((items) => {
        return <h2>{(items?.id, items?.title)}</h2>;
      })}

      <div className="category_cart">
        {categories.map((item) => (
          <div className="category" key={item.id}>
            <p>{item.title}</p>
            <img
              className="category_image"
              src={item?.image}
              alt={item?.title}
            />
            {/* <button className="button" title="12 Product" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
