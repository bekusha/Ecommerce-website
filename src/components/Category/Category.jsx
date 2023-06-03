import React, { useContext } from "react";
import arrow from "./arrow.svg";
import "./Category.css";
// import { AppContext } from "../../App";

const Category = (props) => {
  // const { products } = useContext(AppContext);
  // console.log(products);

  return (
    <div className="categoryContainer">
      <img className="categoryImg" src={props.img} alt="" />
      <div className="categoryHeader">{props.header}</div>
      <div className="categoryButton">
        SHOP <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Category;
