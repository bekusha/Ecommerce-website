import React from "react";
import arrow from "./arrow.svg";
import "./Category.css";
const Category = (props) => {
  return (
    <div className="categoryContainer">
      <img className="categoryImg" src={props.img} />
      <div className="categoryHeader">{props.header}</div>
      <div className="categoryButton">
        SHOP <img src={arrow} />
      </div>
    </div>
  );
};

export default Category;
