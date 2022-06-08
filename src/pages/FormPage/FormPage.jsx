import React from "react";
import LocationSlide from "./LocationSlide/LocationSlide";
import QuestionSlide from "./QuestionsSlide/QuestionsSlide";
import Logo from "../../components/Logo/Logo";
import GuideQuestionSlide from "./GuideQuestionSlide/GuideQuestionSlide";

const FormPage = () => {
  return (
    <div className="page">
      <Logo isFixed={true} />
      <LocationSlide />
      <GuideQuestionSlide />
      <QuestionSlide />
    </div>
  );
};
export default FormPage;
