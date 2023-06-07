import React from "react";
import "./Button.css";
import { AppContext } from "../../main";
import { useContext } from "react";
const Button = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.background,
        color: props.color,
        width: props.width,
        border: props.border,
      }}
      className="buttonContainer"
    >
      {props.title}
    </div>
  );
};

export default Button;
