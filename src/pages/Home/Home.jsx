import React from "react";
import Button from "../../components/Button/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import AboveFooter from "../../components/AboveFooter/AboveFooter";
import zx9 from "./zx9.svg";
import { useContext } from "react";
import { AppContext } from "../../App";
const Home = () => {
  const { products } = useContext(AppContext);
  const product = products.map((product) => product);

  return (
    <div className="homeContainer">
      <div className="homeNewProduct">
        <div className="homeNewPoductTitle">NEW PRODUCT</div>
        <h1 className="homeNewProductHeader">{product[0].title}</h1>
        <p className="homeNewProductParagraph">{product[0].description}</p>{" "}
        <Link to={`/product/${product[0].id}`}>
          {" "}
          <Button
            title="SEE PRODUCT"
            background="#D87D4A"
            color={"white"}
            width={160}
          />
        </Link>
      </div>
      <Navigation />
      <div className="homeOrangeProduct">
        <img className="homeOrangeProductImg" src={zx9} />
        <h1 className="homeOrangeProductHeader">{product[3].title}</h1>
        <p className="homeOrangeProductParagraph">{product[3].description}</p>
        <Link to={`/product/${product[3].id}`}>
          {" "}
          <Button
            background={"black"}
            color={"white"}
            title={"SEE PRODUCT"}
            width={160}
          />
        </Link>
      </div>
      <div className="homeZx7Speaker">
        <h1 className="homeZx7SpeakerHeader">{product[4].title}</h1>{" "}
        <Link to={`/product/${product[4].id}`}>
          {" "}
          <Button
            width={160}
            title={"SEE PRODUCT"}
            background={"transparent"}
            color={"black"}
            border={"solid"}
          />
        </Link>
      </div>
      <div className="homeYx1Earphone">
        <img
          className="homeYx1EarphoneImg"
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205354/mark2/mark1/xx59/zx9/zx7/yx1/image-gallery-2_xquoyn.jpg"
        />
        <div className="homeYx1EarphoneBackground">
          <h1>YX1 EARPHONE</h1>{" "}
          <Link to={`/product/${product[5].id}`}>
            {" "}
            <Button
              width={160}
              title={"SEE PRODUCT"}
              background={"transparent"}
              color={"black"}
              border={"solid"}
            />
          </Link>
        </div>
      </div>
      <AboveFooter />
    </div>
  );
};

export default Home;
