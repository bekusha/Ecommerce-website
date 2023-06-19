import "./Header.css";
import logo from "../../assets/audiophile.svg";
import basket from "../../assets/Combined Shape.svg";
import navi from "../../assets/Group.svg";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { AppContext } from "../../main";
import { useContext } from "react";
const Header = () => {
  const products = useContext(AppContext);

  const [nav, setNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleRemoveCartItems = () => {
    products.setCartItems([]);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  const handleShowNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="headerContainer">
        <img
          onClick={handleShowNav}
          className="nav"
          src={navi}
          width={20}
          alt=""
        />
        <Link to={"/"}>
          {" "}
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul className="navBarTop">
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
        <img onClick={handleShowCart} src={basket} className="basket" />
        <div onClick={handleShowNav} className={nav ? "navOpen" : "navOff"}>
          <Navigation />
        </div>
        <div className={showCart ? "cart" : "navOff"}>
          <div className="cartInfoContainer">
            {" "}
            <div className="cartQuantity">
              CART({products.cartItems.length})
            </div>
            <div className="cartRemoveButton" onClick={handleRemoveCartItems}>
              Remove all
            </div>
          </div>

          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Header;
