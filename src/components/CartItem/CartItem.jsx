import React from "react";
import "./CartItem.css";
import { AppContext } from "../../main";
import { useContext } from "react";

const CartItem = () => {
  const { cartItems } = useContext(AppContext);

  const handleIncrement = () => {
    products.setQuantity(products.quantity + 1);
  };
  const handleDecrement = () => {
    if (products.quantity !== 1) {
      products.setQuantity(products.quantity - 1);
    }
  };
  return (
    <>
      {cartItems &&
        cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cartItemContainer">
              <img className="cartItemImg" src={cartItem.img} />
              <div className="cartItemTitlePrice">
                <div className="cartItemTitle">{cartItem.title}</div>
                <div className="cartItemPrice">${cartItem.price}</div>
              </div>
              <div className="cartItemCalculator">
                <div onClick={handleDecrement} className="cartItemMinus">
                  -
                </div>
                <div className="cartItemQuantity">{cartItem.quantity}</div>
                <div onClick={handleIncrement} className="cartItemPlus">
                  +
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CartItem;
