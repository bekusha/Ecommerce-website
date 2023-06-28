import React from "react";
import Button from "../../components/Button/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import AboveFooter from "../../components/AboveFooter/AboveFooter";
import zx9 from "./zx9.svg";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../main";

const Home = () => {
  const { backData } = useContext(AppContext);

  const product = backData.map((product) => product);
  console.log(product);
  useEffect(() => {
    window.scroll(0, 0);
    console.log("Hello");
  }, []);
  return (
    <div className="homeContainer">
      <div className="homeNewProduct">
        <img
          className="homeNewProductImg"
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1685211338/mark2/image-header_lf6vdc.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1686166012/mark2/image-hero_namdn6.jpg"
          className="homeNewProductTablet"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1686233584/mark2/image-hero_vdz8rb.jpg"
          className="homeNewProductDesktop"
          alt=""
        />

        <div className="homeNewProductInfo">
          <div className="homeNewProductTitle">NEW PRODUCT</div>
          <h1 className="homeNewProductHeader">XX99 Mark II HeadphoneS</h1>
          <p className="homeNewProductParagraph">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={`/product/${product.length && product[0]._id}`}>
            {" "}
            <Button title={"SEE PRODUCT"} width={160} background={"#D87D4A"} />
          </Link>
        </div>
      </div>
      <div className="homeNavCont">
        <Navigation />
      </div>

      <AboveFooter />
    </div>
  );
};

export default Home;
