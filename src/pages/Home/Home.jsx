import React from "react";
import Button from "../../components/Button/Button";
import "./Home.css";

import Navigation from "../../components/Navigation/Navigation";
import AboveFooter from "../../components/AboveFooter/AboveFooter";
import zx9 from "./zx9.svg";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeNewProduct">
        <div className="homeNewProductTitle">NEW PRODUCT</div>
        <h1 className="homeNewProductHeader">XX99 MARK II HEADPHONES</h1>
        <p className="homeNewProductParagraph">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Button
          title="SEE PRODUCT"
          background="#D87D4A"
          color={"white"}
          width={160}
        />
      </div>
      <Navigation />
      <div className="homeOrangeProduct">
        <img className="homeOrangeProductImg" src={zx9} />
        <h1 className="homeOrangeProductHeader">ZX9 SPEAKER</h1>
        <p className="homeOrangeProductParagraph">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          background={"black"}
          color={"white"}
          title={"SEE PRODUCT"}
          width={160}
        />
      </div>
      <div className="homeZx7Speaker">
        <h1 className="homeZx7SpeakerHeader">ZX7 SPEAKER</h1>
        <Button
          width={160}
          title={"SEE PRODUCT"}
          background={"transparent"}
          color={"black"}
          border={"solid"}
        />
      </div>
      <div className="homeYx1Earphone">
        <img
          className="homeYx1EarphoneImg"
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1685205354/mark2/mark1/xx59/zx9/zx7/yx1/image-gallery-2_xquoyn.jpg"
        />
        <div className="homeYx1EarphoneBackground">
          <h1>YX1 EARPHONE</h1>
          <Button
            width={160}
            title={"SEE PRODUCT"}
            background={"transparent"}
            color={"black"}
            border={"solid"}
          />
        </div>
      </div>
      <AboveFooter />
    </div>
  );
};

export default Home;
