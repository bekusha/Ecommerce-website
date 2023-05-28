import React from "react";
import Category from "../Category/Category";
import headphone from "./mark1.svg";
import speaker from "./zx9.svg";
import earphone from "./earphone.svg";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navigationContainer">
      <Category img={headphone} header={"HEADPHONES"} />
      <Category img={speaker} header={"SPEAKERS"} />
      <Category img={earphone} header={"EARPHONE"} />
    </div>
  );
};

export default Navigation;
