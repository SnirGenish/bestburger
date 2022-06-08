import React from "react";
import Logosvg from "../../svgs/logo.svg";
import "./QuestionHeadline.css";

const QuestionHeadline = (props) => {
  return <h1 id="QuestionHeadline">{props.text}</h1>;
};
export default QuestionHeadline;
