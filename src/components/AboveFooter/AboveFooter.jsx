import React from "react";
import "./AboveFooter.css";
import boy from "../../assets/componentImages/image-best-gear.jpg";
const AboveFooter = () => {
  return (
    <div className="aboveFooterContainer">
      <img src={boy} className="aboveFooterImg" />
      <h1 className="aboveFooterHeader">
        BRINGING YOU THE <span className="goldText">BEST</span> AUDIO GEAR
      </h1>
      <p className="aboveFooterParagraph">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default AboveFooter;
