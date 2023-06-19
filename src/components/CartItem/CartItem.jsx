import React, { useState } from "react";
import "./CartItem.css";
import { AppContext } from "../../main";
import { useContext } from "react";

const CartItem = () => {
  const { cartItems } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  console.log();
  // const product = cartItems.map((item)=>)

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      {cartItems &&
        cartItems.map((cartItem) => {
          console.log(cartItem);
          return (
            <div key={cartItem.id} className="cartItemContainer">
              <img className="cartItemImg" src={cartItem.img} />
              <div className="cartItemTitlePrice">
                <div className="cartItemTitle">{cartItem.title}</div>
                <div className="cartItemPrice">
                  ${cartItem.price * quantity}
                </div>
              </div>
              <div className="cartItemCalculator">
                <div onClick={handleDecrement} className="cartItemMinus">
                  -
                </div>
                <div className="cartItemQuantity">{quantity}</div>
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
