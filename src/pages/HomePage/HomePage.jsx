import React, { useEffect, useContext } from "react";
import Logo from "../../components/Logo/Logo";
import AboutSlide from "./AboutSlide/AboutSlide";
import { getList } from "../../api/getList";
import HomeSlide from "./HomeSlide/HomeSlide";
import { Context } from "../FormPage/FormGlobalState";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useContext(Context);
  useEffect(() => {
    const getTopList = async () => {
      const data = await getList();
      await setGlobalState((prev) => {
        let newObj = { ...prev };
        newObj.topList = data;
        return newObj;
      });
    };
    getTopList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page">
      <Logo isFixed={true} />
      <HomeSlide />
      <AboutSlide />
    </div>
  );
};
export default HomePage;
