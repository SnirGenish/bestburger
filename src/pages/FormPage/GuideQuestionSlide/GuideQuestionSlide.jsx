import React, { useState, useContext } from "react";
import Button from "../../../components/Button/Button";
import QuestionHeadline from "../../../components/QuestionHeadline/QuestionHeadline";
import GuideQuestionButton from "./components/GuideQuestionButton";
import "./GuideQuestionSlide.css";
import { Context } from "../FormGlobalState";

const GuideQuestionSlide = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useContext(Context);
  const [currentSize, setCurrentSize] = useState("");
  return (
    <div id="GuideQuestionSlide" className="paddingMobile slide column even">
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
        <Button
          text="next"
          theme="blue"
          slideTo={currentSize ? "#question1" : null}
          clickFunction={(e) => {
            setGlobalState((prev) => {
              let newObj = { ...prev };
              newObj.size = currentSize;
              return newObj;
            });
          }}
        />
        <Button slideTo="#LocationSlide" text="back" theme="red" />
      </div>
    </div>
  );
};
export default GuideQuestionSlide;
