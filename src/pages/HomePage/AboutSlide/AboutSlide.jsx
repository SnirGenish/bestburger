import React from "react";
import Button from "../../../components/Button/Button";
import "./AboutSlide.css";

const AboutSlide = () => {
  return (
    <div id="AboutSlide" className="paddingMobile slide column even">
      <div className="logosPlace"></div>
      <div id="aboutText">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          error a quo beatae sequi quibusdam laboriosam autem velit consequatur.
          Dolores harum dolorum cumque id blanditiis voluptas tempora animi
          ratione dolorem.
        </p>
      </div>
      <Button slideTo="#HomeSlide" text="back" theme="red" />
    </div>
  );
};
export default AboutSlide;
