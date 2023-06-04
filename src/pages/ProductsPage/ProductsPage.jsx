import React, { useContext } from "react";
import "./ProductsPage.css";
import { AppContext } from "../../App";
import Button from "../../components/Button/Button";
import { useParams } from "react-router";
import Navigation from "../../components/Navigation/Navigation";

const ProductsPage = () => {
  const { productId } = useParams();
  console.log(productId);
  const { products, cartItems, setCartItems, quantity, setQuantity } =
    useContext(AppContext);
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    };
    setCartItems([...cartItems, newItem]);
    console.log(cartItems);
  };

  return (
    <div className="productsPageContainer">
      <img className="productsPageImg" src={product.img} alt={product.title} />
      <h1 className="productsPageHeading">{product.title}</h1>
      <p className="productsPageParagraph">{product.description}</p>
      <div className="productsPagePrice">{product.price * quantity}</div>
      <div className="productsPageCalculatorContainer">
        <div className="productsPagePlusMinus">
          <div onClick={handleDecrement} className="productsPageMinus">
            -
          </div>
          <div className="productsPageQuantity">{quantity}</div>
          <div onClick={handleIncrement} className="productsPagePlus">
            +
          </div>
        </div>
        <div onClick={handleAddToCart}>
          {" "}
          <Button background={"#D87D4A"} title={"ADD TO CART"} width={160} />
        </div>
      </div>
      <h1 className="features">FEATURES</h1>
      <div className="productsPageFeatures">{product.features}</div>
      <ul className="productsPageList">
        <h1>IN THE BOX</h1>
        <li className="productsPageListInner">
          <div className="ulOrange">1x</div>
          Headphone Unit
        </li>
        <li className="productsPageListInner">
          <div className="ulOrange">1x</div>
          Replacement Earcups
        </li>
        <li className="productsPageListInner">
          <div className="ulOrange">1x</div>
          User Manual
        </li>
        <li className="productsPageListInner">
          <div className="ulOrange">1x</div>
          3.5mm 5m Audio Cable
        </li>
        <li className="productsPageListInner">
          <div className="ulOrange">1x</div>
          Travel Bag
        </li>
      </ul>
      <div className="productsPageImagesContainer">
        <img className="productsPageFirsSize" src={product.imagesArray[2]} />
        <img className="productsPageFirsSize" src={product.imagesArray[1]} />
        <img className="productsPageSecondSize" src={product.imagesArray[0]} />
      </div>
      <Navigation />
    </div>
  );
};

export default ProductsPage;
