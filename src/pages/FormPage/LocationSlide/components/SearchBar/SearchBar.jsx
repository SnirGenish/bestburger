import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [placesList, setPlacesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const answersRef = useRef(null);
  const showAnswers = () => {
    answersRef.current.style.display = "block";
  };
  const choseAnswer = (e) => {
    setInputValue(e);
    answersRef.current.style.display = "none";
  };
  useEffect(() => {
    const getPlaces = async () => {
      try {
        const fetching = await axios.get(
          `https://nameless-citadel-58066.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputValue}&types=establishment&key=AIzaSyANPy4Na6KeY6aTgUKRxHv7n7bFmvYJiO0`
        );
        if (fetching.data.status === "OK") {
          const mappedData = fetching.data.predictions.map((e) => {
            const terms = e.terms;
            return (
              <li
                onClick={(e) => choseAnswer(e.currentTarget.innerText)}
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
