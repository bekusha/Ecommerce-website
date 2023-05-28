import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/audiophile.svg";
import basket from "../../assets/Combined Shape.svg";
import nav from "../../assets/Group.svg";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <img className="nav" src={nav} width={20} />
        <img className="logo" src={logo} />
        <img src={basket} className="basket" />
      </div>
    </>
  );
};

export default Header;
