import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { AppContext } from "../../App";
const CartItem = () => {
  return (
    <div className="cartItemContainer">
      <img className="cartItemImg" />
      <div className="cartItemTitlePrice">
        <div className="cartItemTitle">title</div>
        <div className="cartItemPrice">price</div>
      </div>
      <div className="cartItemCalculator">
        <div className="cartItemMinus">-</div>
        <div className="cartItemQuantity">1</div>
        <div className="cartItemPlus">+</div>
      </div>
    </div>
  );
};

export default CartItem;
