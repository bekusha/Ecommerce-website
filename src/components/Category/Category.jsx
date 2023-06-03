import React, { useContext } from "react";
import arrow from "./arrow.svg";
import "./Category.css";
import { AppContext } from "../../App";

const Category = (props) => {
  const { products } = useContext(AppContext);
  console.log(products);

  const filterProduct = (product) => {
    // Implement your logic for filtering products here
  };

  return (
    <div className="categoryContainer">
      <img className="categoryImg" src={props.img} alt="" />
      <div className="categoryHeader">{props.header}</div>
      <div onClick={() => filterProduct("speaker")} className="categoryButton">
        SHOP <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Category;
