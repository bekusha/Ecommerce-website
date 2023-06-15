import React from "react";
import "./AlsoLike.css";
import { AppContext } from "../../main";
import { useContext } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AlsoLike = () => {
  const { backData } = useContext(AppContext);

  return (
    <>
      {backData &&
        backData.map((product) => {
          return (
            <div key={product._id} className="alsoLikeContainer">
              <div className="alsoLikeImgContainer">
                {" "}
                <img className="alsoLikeImg" src={product.img} />
              </div>
              <div className="alsoLikeTitle">Product</div>
              <Link to={`/product/${product.id}`}>
                {" "}
                <Button title="SEE PRODUCT" background="#D87D4A" width={160} />
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default AlsoLike;
