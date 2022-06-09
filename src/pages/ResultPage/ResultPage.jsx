import React, { useContext, useState, useEffect } from "react";
import { Context } from "../FormPage/FormGlobalState";
import Logo from "../../components/Logo/Logo";
import "./ResultPage.css";
import Button from "../../components/Button/Button";
import { addResultToTopList } from "../../api/addResultToTopList";
import axios from "axios";
import { Link } from "react-router-dom";
import { getList } from "../../api/getList";
const ResultPage = () => {
  const [totalScore, setTotalScore] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useContext(Context);
  useEffect(() => {
    const getTotalScore = async () => {
      await addResultToTopList(globalState.location, globalState.Score);
      const getting = await axios.get(
        "https://6298652ede3d7eea3c660322.mockapi.io/toplist"
      );
      const finded = await getting.data.find(
        (e) => e.name === globalState.location
      );
      const scoreAvg =
        (await finded.score.reduce((a, b) => a + b, 0)) / finded.score.length;
      setTotalScore(parseInt(scoreAvg));
    };
    if (globalState.location) {
      getTotalScore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const resetDataAfterSubmit = () => {
    setGlobalState((prev) => {
      let newObj = { ...prev };
      newObj.location = "";
      newObj.size = "";
      newObj.Score = 0;
      newObj.topList = prev.topList;
      return newObj;
    });
  };

  return (
    <div id="ResultPage" className="odd column page ">
      <Logo />
      <div className="text">
        <h3 className="anim1">
          the score you gave{" "}
          <span className="location"> "{globalState.location}" </span> is:
        </h3>
        <h1 className="anim2">
          <span className="score"> {globalState.Score}</span>/10
        </h1>
        <div className="anim3">
          <h3>total score:</h3>
          <h1>{totalScore ? `${totalScore}/10` : "spinner"}</h1>
        </div>
      </div>
      <Link to={"/list"}>
        <Button
          theme="blue"
          clickFunction={(e) => resetDataAfterSubmit()}
          text="Top List"
        />
      </Link>
    </div>
  );
};
export default ResultPage;
