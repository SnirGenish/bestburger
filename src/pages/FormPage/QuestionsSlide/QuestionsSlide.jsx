import React from "react";
import questions from "../../../constant/questions";

const QuestionSlide = () => {
  const mappedQuestions = questions.map((e) => {
    return (
      <div
        key={e.qNumber}
        id={e.id}
        className={e.qNumber % 2 ? "slide even" : "slide odd"}
      >
        {e.title}
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
