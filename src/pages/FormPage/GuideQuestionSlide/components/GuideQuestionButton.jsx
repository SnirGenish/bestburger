import React from "react";
import "../style/GuideQuestionButton.css";

const GuideQuestionButton = (props) => {
  return (
    <button
      id="GuideQuestionButton"
      onClick={props.click}
      className={props.isChosen === props.text ? "chosen" : "notchosen"}
    >
      {props.text}
    </button>
  );
};
export default GuideQuestionButton;
