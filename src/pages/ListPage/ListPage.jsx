import React, { useContext, useEffect } from "react";
import "./ListPage.css";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Context } from "../FormPage/FormGlobalState";
import { getList } from "../../api/getList";
const MappedData = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useContext(Context);
  const data = globalState.topList;
  const mapped = data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      score: e.score.reduce((a, b) => a + b, 0) / e.score.length,
    };
  });
  const sorted = mapped.sort((a, b) => b.score - a.score);
  const mapToElements = sorted.map((e, i) => {
    return (
      <li key={e.id} className="row">
        <span className="listPlace">{`#${i + 1}`}</span> <p>{e.name} </p>
        <span className="listScore">{parseInt(e.score)}/10</span>
      </li>
    );
  });
  return mapToElements;
};
const ListPage = () => {
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
    <div id="ListPage" className="paddingDesk paddingMobile page odd column ">
      <Logo />
      <div id="list">
        <h1>Top List</h1>
        <ul className="column">
          <MappedData />
        </ul>
      </div>
      <Link to={"/"}>
        <Button theme="blue" text="Home" />
      </Link>
    </div>
  );
};
export default ListPage;
