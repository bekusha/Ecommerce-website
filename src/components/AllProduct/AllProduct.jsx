import React, { useContext } from "react";
import Button from "../Button/Button";
import { AppContext } from "../../main";
import "./EachProduct.css";
import AboveFooter from "../AboveFooter/AboveFooter";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
const EachProduct = () => {
  const { backData } = useContext(AppContext);
  const { category } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const filteredProducts = backData.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      {filteredProducts.map((product) => (
        <div className="eachProductContainer" key={product._id}>
          <img
            className="eachProductImg"
            src={product.img}
            alt={product.title}
          />
          <div>
            <div className="eachProductInfo">
              <h1 className="eachProductTitle">{product.title}</h1>
              <p className="eachProductParagraph">{product.description}</p>
              <div className="eachProductButtonContainer">
                <Link to={`/product/${product._id}`}>
                  <Button
                    width={160}
                    background={"#D87D4A"}
                    title={"SEE PRODUCT"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Navigation />
      <AboveFooter />
    </>
  );
};

export default EachProduct;
