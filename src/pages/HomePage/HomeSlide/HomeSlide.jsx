import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import DownButton from "./components/DownButton";
import "./HomeSlide.css";

const HomeSlide = () => {
  return (
    <div id="HomeSlide" className="slide odd column">
      <div className="logosPlace"></div>{" "}
      <div className="row" id="homeSlideButtons">
        <Link to={"/form"}>
          <Button text="start quiz" theme="blue" />
        </Link>
        <Link to={"/list"}>
          <Button text="top list" theme="red" />
        </Link>
      </div>
      <DownButton />
    </div>
  );
};
export default HomeSlide;
