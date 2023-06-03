import React from "react";
import Category from "../Category/Category";
import headphone from "./mark1.svg";
import speaker from "./zx9.svg";
import earphone from "./earphone.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigationContainer">
      <Link to={"allproducts/Headphones"}>
        {" "}
        <Category img={headphone} header={"HEADPHONES"} />
      </Link>
      <Link to={"allproducts/Speakers"}>
        {" "}
        <Category img={speaker} header={"SPEAKERS"} />
      </Link>
      <Link to={"allproducts/Earphones"}>
        {" "}
        <Category img={earphone} header={"EARPHONE"} />
      </Link>
    </div>
  );
};

export default Navigation;
