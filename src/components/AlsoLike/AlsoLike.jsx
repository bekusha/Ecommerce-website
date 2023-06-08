import React from "react";
import "./AlsoLike.css";
import { AppContext } from "../../main";
import { useContext } from "react";
import Button from "../Button/Button";

const AlsoLike = () => {
  const data = useContext(AppContext);
  const products = data.products;
  console.log(products);
  console.log(products);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="alsoLikeContainer">
            <div className="alsoLikeImgContainer">
              {" "}
              <img className="alsoLikeImg" src={product.img} />
            </div>

            <div className="alsoLikeTitle">{product.title}</div>
            <Button title="SEE PRODUCT" background="#D87D4A" width={160} />
          </div>
        );
      })}
    </>
  );
};

export default AlsoLike;
