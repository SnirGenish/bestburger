import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import QuestionHeadline from "../../../components/QuestionHeadline/QuestionHeadline";
import GuideQuestionButton from "./components/GuideQuestionButton";
import "./GuideQuestionSlide.css";

const GuideQuestionSlide = () => {
  const [currentSize, setCurrentSize] = useState("");
  return (
    <div id="GuideQuestionSlide" className="slide column even">
      <div className="logosPlace"></div>
      <QuestionHeadline text="which way have you ordered your burger?" />
      <div id="buttons" className="row">
        <GuideQuestionButton
          click={(e) => setCurrentSize("R")}
          isChosen={currentSize}
          text="R"
        />
        <GuideQuestionButton
          click={(e) => setCurrentSize("MR")}
          isChosen={currentSize}
          text="MR"
        />
        <GuideQuestionButton
          click={(e) => setCurrentSize("M")}
          isChosen={currentSize}
          text="M"
        />
        <GuideQuestionButton
          click={(e) => setCurrentSize("MW")}
          isChosen={currentSize}
          text="MW"
        />
        <GuideQuestionButton
          click={(e) => setCurrentSize("WD")}
          isChosen={currentSize}
          text="WD"
        />
      </div>
      <div className="row formSlideButtons">
        <Button text="next" theme="blue" slideTo="#question1" />
        <Button slideTo="#LocationSlide" text="back" theme="red" />
      </div>
    </div>
  );
};
export default GuideQuestionSlide;
