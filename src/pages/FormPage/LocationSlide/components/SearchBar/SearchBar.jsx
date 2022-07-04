import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import "./SearchBar.css";
import { Context } from "../../../FormGlobalState";

const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalState, setGlobalState] = useContext(Context);
  const [placesList, setPlacesList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const answersRef = useRef(null);
  const showAnswers = () => {
    answersRef.current.style.display = "block";
  };
  const ChoseAnswer = (e) => {
    setGlobalState((prev) => {
      let newObj = { ...prev };
      newObj.location = e;
      return newObj;
    });
    setInputValue(e);
    answersRef.current.style.display = "none";
  };
  useEffect(() => {
    const getPlaces = async () => {
      try {
        const fetching = await axios.post(
          `https://shielded-woodland-11387.herokuapp.com/`,
          {
            text: inputValue,
          }
        );
        if (fetching.data.status === "OK") {
          const mappedData = fetching.data.predictions.map((e) => {
            const terms = e.terms;
            return (
              <li
                onClick={(e) => ChoseAnswer(e.currentTarget.innerText)}
                key={e.description}
              >
                <span>
                  {terms[0].value} {", "}
                </span>
                {terms[1].value}, {terms[2].value}
              </li>
            );
          });
          setPlacesList(mappedData);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div id="SearchBar">
      <p>where have you eaten?</p>
      <input
        onFocus={(e) => showAnswers()}
        id="locationSearchBar"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div ref={answersRef} id="answers">
        <ul>{placesList}</ul>
      </div>
    </div>
  );
};
export default SearchBar;
