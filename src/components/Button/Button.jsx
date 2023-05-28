import React from "react";
import "./Button.css";
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
