import React, { useState } from "react";
import QuestionHeadline from "../../../components/QuestionHeadline/QuestionHeadline";
import questions from "../../../constant/questions";
import Button from "../../../components/Button/Button";
import "./style/QuestionSlide.css";
import Image from "./components/Image/Image";

const QuestionSlide = () => {
  const [rangeValue1, setRangeValue1] = useState(1);
  const [rangeValue2, setRangeValue2] = useState(1);
  const [rangeValue3, setRangeValue3] = useState(1);
  const rangeValueFinder = (number) => {
    switch (number) {
      case 1:
        return rangeValue1;
      case 2:
        return rangeValue2;
      case 3:
        return rangeValue3;
      default:
    }
  };
  const setRangeValueFinder = (number, input) => {
    switch (number) {
      case 1:
        setRangeValue1(input);
        break;
      case 2:
        setRangeValue2(input);
        break;
      case 3:
        setRangeValue3(input);
        break;
      default:
    }
  };
  const mappedQuestions = questions.map((e) => {
    return (
      <div
        key={e.qNumber}
        id={e.id}
        className={
          e.qNumber % 2
            ? "questionslide column slide odd"
            : "questionslide column slide even"
        }
      >
        <div className="logosPlace"></div>
        <QuestionHeadline text={e.title} />
        <Image image={e.photoLibrary} num={rangeValueFinder(e.qNumber)} />
        <input
          type="range"
          value={parseInt(rangeValueFinder(e.qNumber))}
          onChange={(f) => setRangeValueFinder(e.qNumber, f.target.value)}
          id="Range"
          min="1"
          max="5"
        />{" "}
        <div className="row formSlideButtons">
          <Button
            text="next"
            theme="blue"
            slideTo={
              e.qNumber === 3
                ? "#FinaleScore"
                : "#" + e.id.slice(0, 8) + (e.qNumber + 1)
            }
          />
          <Button
            slideTo={
              e.qNumber === 1
                ? "#GuideQuestionSlide"
                : "#" + e.id.slice(0, 8) + (e.qNumber - 1)
            }
            text="back"
            theme="red"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="page" id="questions">
      {mappedQuestions}
    </div>
  );
};
export default QuestionSlide;
