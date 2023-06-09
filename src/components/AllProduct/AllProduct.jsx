import React, { useContext } from "react";
import Button from "../Button/Button";
import { AppContext } from "../../main";
import "./EachProduct.css";
import AboveFooter from "../AboveFooter/AboveFooter";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const EachProduct = () => {
  const { products } = useContext(AppContext);
  const { category } = useParams();

  console.log(category);

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      {filteredProducts.map((product) => (
        <div className="eachProductContainer" key={product.id}>
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
                <Link to={`/product/${product.id}`}>
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
      <Navigation />a
      <AboveFooter />
    </div>
  );
};

export default EachProduct;
