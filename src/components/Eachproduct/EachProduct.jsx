import React, { useContext } from "react";
import Button from "../Button/Button";
import { AppContext } from "../../App";
import "./EachProduct.css";
const EachProduct = () => {
  const { cartItems, setCartItems, quantity, setQuantity, products } =
    useContext(AppContext);
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div className="eachProductContainer" key={product.id}>
          <img className="eachProductImg" src={product.img} />
          <h1 className="eachProductTitle">{product.title}</h1>
          <p className="eachProductParagraph">{product.description}</p>
          <div className="eachProductPrice">${product.price}</div>
          <div className="eachProductQuantityContainer">
            <div className="eachProductCalculatorContainer">
              <div className="eachProductMinus">-</div>
              <div className="eachProductQuantity">{quantity}</div>
              <div className="eachProductPlus">+</div>
            </div>
            <Button background={"#D87D4A"} title={"ADD TO CART"} />
          </div>
        </div>
      ))}
      <h1>EachProduct</h1>
    </div>
  );
};

export default EachProduct;
