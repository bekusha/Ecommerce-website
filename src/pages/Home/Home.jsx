import React from "react";
import Button from "../../components/Button/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import AboveFooter from "../../components/AboveFooter/AboveFooter";
import zx9 from "./zx9.svg";
import { useContext } from "react";
import { AppContext } from "../../main";
const Home = () => {
  const { products } = useContext(AppContext);
  const product = products.map((product) => product);

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
          <Link to={`/product/${product[0].id}`}>
            {" "}
            <Button title={"SEE PRODUCT"} width={160} background={"#D87D4A"} />
          </Link>
        </div>
      </div>
      <div className="homeNavCont">
        <Navigation />
      </div>
      <div className="homeOrangeProduct">
        <img className="homeOrangeProductImg" src={zx9} alt="" />

        <div className="homeOrangeProductInfoContainer">
          <h1 className="homeOrangeProductHeader">{product[3].title}</h1>
          <p className="homeOrangeProductParagraph">{product[3].description}</p>
          <Link to={`/product/${product[3].id}`}>
            {" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                background={"black"}
                color={"white"}
                title={"SEE PRODUCT"}
                width={160}
              />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="homeZx7Speaker">
        <img
          className="homeZx7SpeakerImg"
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1686148095/mark2/image-speaker-zx7_gsea9s.jpg"
        />
        <div className="homeZx7SpeakerInfo">
          <h1 className="homeZx7SpeakerTitle">ZX7 SPEAKER</h1>
          <Button
            background={"transparent"}
            border={"solid"}
            width={160}
            title={"SEE PRODUCT"}
          />
        </div>
      </div> */}

      <AboveFooter />
    </div>
  );
};

export default Home;
