import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../../components/Button/Button";
import "./style/LocationSlide.css";
import { Link } from "react-router-dom";

const LocationSlide = () => {
  return (
    <div id="LocationSlide" className="slide column odd">
      <div className="column">
        <div className="logosPlace"></div>
        <SearchBar />
      </div>
      <div className="row" id="searchSlideButtons">
        <Button text="next" theme="blue" slideTo="#question1" />
        <Link to={"/"}>
          <Button slideTo="#f" text="back" theme="red" />
        </Link>
      </div>
    </div>
  );
};
export default LocationSlide;
