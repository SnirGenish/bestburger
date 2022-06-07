import React from "react";
import Logo from "../../components/Logo/Logo";
import AboutSlide from "./AboutSlide/AboutSlide";
import HomeSlide from "./HomeSlide/HomeSlide";
const HomePage = () => {
  return (
    <div className="page">
      <Logo isFixed={true} />
      <HomeSlide />
      <AboutSlide />
    </div>
  );
};
export default HomePage;
