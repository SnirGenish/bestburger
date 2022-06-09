import React from "react";
import Logosvg from "../../svgs/logo.svg";
import "./Logo.css";

const Logo = (props) => {
  return (
    <img
      src={Logosvg}
      className={props.isFixed ? "positionFixed Logo" : "Logo"}
      alt="Logo"
    />
  );
};
export default Logo;
