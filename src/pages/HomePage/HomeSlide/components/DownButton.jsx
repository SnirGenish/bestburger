import React from "react";
import DownArrow from "../../../../svgs/downArrow.svg";
import "../style/DownButton.css";

const DownButton = () => {
  return (
    <div id="DownButton">
      <a className="column" id="aboutLink" href="#AboutSlide">
        <span>About</span>
        <img id="DownArrow" src={DownArrow} alt="down arrow" />
      </a>
    </div>
  );
};
export default DownButton;
