import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "./ProductsPage.css";
import { AppContext } from "../../main";
import Button from "../../components/Button/Button";
import { useParams } from "react-router";
import Navigation from "../../components/Navigation/Navigation";
import AlsoLike from "../../components/AlsoLike/AlsoLike";
const ProductsPage = () => {
  const { productId } = useParams();

  const { cartItems, setCartItems, quantity, setQuantity, backData } =
    useContext(AppContext);
  console.log(backData);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const product = backData.find((product) => product._id === productId);

  const handleAddToCart = (id) => {
    const alreadyInCart = cartItems.find((item) => item._id === product.id);
    const newItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: product.quantity,
    };

    if (alreadyInCart) {
      setCartItems(
        cartItems.map((item) => {
          if (item._id === id) {
            item.quantity + 1;
          }
          return item;
        })
      );
      return;
    }
    setCartItems([...cartItems, newItem]);
  };

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
              <div className="productsPagePrice">${product.price}</div>
              <div className="productsPageCalculatorContainer">
                {/* <div className="productsPagePlusMinus">
                  <div className="productsPageMinus">-</div>
                  <div className="productsPageQuantity">{product.quantity}</div>
                  <div className="productsPagePlus">+</div>
                </div> */}
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
          <div className="productsPageAlsoLike"></div>
          <Navigation />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
