import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a
      href={props.slideTo}
      onClick={props.clickFunction}
      className={props.theme}
      id="Button"
    >
      <p>{props.text}</p>
    </a>
  );
};
export default Button;
