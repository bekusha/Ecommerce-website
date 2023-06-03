import "./Header.css";
import logo from "../../assets/audiophile.svg";
import basket from "../../assets/Combined Shape.svg";
import navi from "../../assets/Group.svg";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
    console.log(showCart);
  };
  const handleShowNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="headerContainer">
        <img onClick={handleShowNav} className="nav" src={navi} width={20} />
        <Link to={"/"}>
          {" "}
          <img className="logo" src={logo} />
        </Link>
        <img onClick={handleShowCart} src={basket} className="basket" />
        <div onClick={handleShowNav} className={nav ? "navOpen" : "navOff"}>
          <Navigation />
        </div>
        <div className={showCart ? "cart" : "navOff"}>
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Header;
