import React, { useContext } from "react";
import { Context } from "../FormGlobalState";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../../components/Button/Button";
import "./style/LocationSlide.css";
import { Link } from "react-router-dom";

const LocationSlide = () => {
  const [globalState] = useContext(Context);
  return (
    <div id="LocationSlide" className="paddingMobile slide column odd">
      <div className="column">
        <div className="logosPlace"></div>
        <SearchBar />
      </div>
      <div className="row formSlideButtons">
        <Button
          text="next"
          theme="blue"
          slideTo={globalState.location ? "#GuideQuestionSlide" : null}
        />
        <Link to={"/"}>
          <Button text="back" theme="red" />
        </Link>
      </div>
    </div>
  );
};
export default LocationSlide;
