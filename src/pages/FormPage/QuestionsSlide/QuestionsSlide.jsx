import React, { useState, useContext, useCallback } from "react";
import QuestionHeadline from "../../../components/QuestionHeadline/QuestionHeadline";
import questions from "../../../constant/questions";
import Button from "../../../components/Button/Button";
import "./style/QuestionSlide.css";
import Image from "./components/Image/Image";
import { Context } from "../FormGlobalState";
import { useNavigate } from "react-router-dom";
const QuestionSlide = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useContext(Context);
  const [rangeValue1, setRangeValue1] = useState("1");
  const [rangeValue2, setRangeValue2] = useState("1");
  const [rangeValue3, setRangeValue3] = useState("1");
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
  const calcScore = () => {
    let finaleScore = 0;
    switch (rangeValue1) {
      case "2":
      case "4":
        finaleScore += 1;
        break;
      case "3":
        finaleScore += 2;
        break;
      default:
        break;
    }
    switch (rangeValue2) {
      case "1":
        finaleScore += 4;
        break;
      case "2":
        finaleScore += 3;
        break;
      case "3":
        finaleScore += 2;
        break;
      case "4":
        finaleScore += 1;
        break;
      default:
        break;
    }
    switch (globalState.size) {
      case "R":
        switch (rangeValue3) {
          case "1":
            finaleScore += 4;
            break;
          case "2":
            finaleScore += 3;
            break;
          case "3":
            finaleScore += 2;
            break;
          case "4":
            finaleScore += 1;
            break;

          default:
            break;
        }
        break;
      case "MR":
        switch (rangeValue3) {
          case "1":
          case "3":
            finaleScore += 3;
            break;
          case "2":
            finaleScore += 4;
            break;
          case "4":
            finaleScore += 2;
            break;
          case "5":
            finaleScore += 1;
            break;

          default:
            break;
        }
        break;
      case "M":
        switch (rangeValue3) {
          case "1":
          case "5":
            finaleScore += 2;
            break;
          case "2":
          case "4":
            finaleScore += 3;
            break;
          case "3":
            finaleScore += 4;
            break;

          default:
            break;
        }
        break;
      case "MW":
        switch (rangeValue3) {
          case "5":
          case "3":
            finaleScore += 3;
            break;
          case "4":
            finaleScore += 4;
            break;
          case "2":
            finaleScore += 2;
            break;
          case "1":
            finaleScore += 1;
            break;

          default:
            break;
        }
        break;
      case "WD":
        switch (rangeValue3) {
          case "5":
            finaleScore += 4;
            break;
          case "4":
            finaleScore += 3;
            break;
          case "3":
            finaleScore += 2;
            break;
          case "2":
            finaleScore += 1;
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }
    setGlobalState((prev) => {
      let newObj = { ...prev };
      newObj.Score = finaleScore;
      return newObj;
    });
  };
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/result", { replace: true }),
    [navigate]
  );
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
            text={e.qNumber === 3 ? "submit" : "next"}
            theme="blue"
            clickFunction={() => {
              if (e.qNumber === 3) {
                calcScore();
                calcScore();
                handleOnClick();
              }
            }}
            slideTo={
              e.qNumber === 3 ? null : "#" + e.id.slice(0, 8) + (e.qNumber + 1)
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
