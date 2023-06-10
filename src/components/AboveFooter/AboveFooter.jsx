import React from "react";
import "./AboveFooter.css";
import boy from "../../assets/componentImages/image-best-gear.jpg";
const AboveFooter = () => {
  return (
    <div className="aboveFooterContainer">
      <div>
        <img src={boy} className="aboveFooterImg" />

        <img
          className="aboveFooterImgTablet"
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1686228514/mark2/image-best-gear_c2fzqq.jpg"
        />
        <img
          className="aboveFooterImgDesktop"
          src="https://res.cloudinary.com/dffpo6zsc/image/upload/v1686243093/mark2/image-best-gear_vscese.jpg"
        />
      </div>
      <div className="aboveFooterInfoContainer">
        <h1 className="aboveFooterHeader">
          BRINGING YOU THE <span className="goldText">BEST</span> AUDIO GEAR
        </h1>
        <p className="aboveFooterParagraph">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AboveFooter;
