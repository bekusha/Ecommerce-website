import React from "react";
import logo from "../../assets/audiophile.svg";
import line from "../../assets/Rectangle.svg";
import f from "../../assets/Path.svg";
import t from "../../assets/Path (1).svg";
import i from "../../assets/Shape.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="line" src={line} />
      <div className="footerLogoContainer">
        <img className="footerLogo" src={logo} />
      </div>

      <ul className="navBar">
        <Link to={"/"}>
          {" "}
          <li className="navBarInner">Home</li>
        </Link>

        <Link to={"/allproducts/Headphones"}>
          {" "}
          <li className="navBarInner">HEADPHONES</li>
        </Link>

        <Link to={"/allproducts/Speakers"}>
          {" "}
          <li className="navBarInner">SPEAKERS</li>
        </Link>

        <Link to={"/allproducts/Earphones"}>
          {" "}
          <li className="navBarInner">EARPHONES</li>
        </Link>
      </ul>
      <p className="footerParagraph">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="footers">
        <div className="footerCopyright">
          Copyright 2021. All Rights Reserved
        </div>
        <div className="footerSoc">
          <img className="footerSocButton" src={f} />
          <img className="footerSocButton" src={t} />
          <img className="footerSocButton" src={i} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
