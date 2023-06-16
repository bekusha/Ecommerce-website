import React, { useContext } from "react";
import { useEffect } from "react";
import "./ProductsPage.css";
import { AppContext } from "../../main";
import Button from "../../components/Button/Button";
import { useParams } from "react-router";
import Navigation from "../../components/Navigation/Navigation";
import AlsoLike from "../../components/AlsoLike/AlsoLike";
const ProductsPage = () => {
  const { productId } = useParams();
  console.log(productId);
  const { cartItems, setCartItems, quantity, setQuantity, backData } =
    useContext(AppContext);

  useEffect(() => {
    window.scroll(0, 0);
    console.log("Hello");
  }, []);
  const product = backData.find((product) => product._id === productId);
  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = (id) => {
    const alreadyInCart = cartItems.find((item) => item._id === product.id);
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: quantity,
    };
    if (alreadyInCart) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            item.quantity + 1;
          }
          return item;
        })
      );
      return;
    }
    setCartItems([...cartItems, newItem]);
  };
  console.log(product);

  return (
    <>
      {product && (
        <div className="productsPageContainer">
          <div className="productPageInfoSide">
            <img
              className="productsPageImg"
              src={product.img}
              alt={product.title}
            />
            <div>
              <h1 className="productsPageHeading">{product.title}</h1>
              <p className="productsPageParagraph">{product.description}</p>
              <div className="productsPagePrice">
                ${product.price * quantity}
              </div>
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
                <div onClick={() => handleAddToCart(product.id)}>
                  {" "}
                  <Button
                    background={"#D87D4A"}
                    title={"ADD TO CART"}
                    width={160}
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="features">FEATURES</h1>
          <div className="productsPageFeatures">{product.features}</div>
          <ul className="productsPageList">
            <h1 className="inTheBox"> IN THE BOX</h1>
            <div className="listDiv">
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
            </div>
          </ul>
          <div className="productsPageImagesContainer">
            <div className="leftSideImages">
              <img
                className="productsPageFirsSize"
                src={product.imagesArray[2]}
              />
              <img
                style={{ marginTop: "11px" }}
                className="productsPageFirsSize"
                src={product.imagesArray[1]}
              />
            </div>
            <img
              className="productsPageSecondSize"
              src={product.imagesArray[0]}
            />
          </div>
          <h1>YOU MAY ALSO LIKE</h1>
          <div className="productsPageAlsoLike">
            <AlsoLike />
          </div>
          <Navigation />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
