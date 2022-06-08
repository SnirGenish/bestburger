import React, { useState } from "react";

const stateForm = {
  location: "",
  size: "",
  Score: 0,
};
export const Context = React.createContext();

const FormGlobalState = ({ children }) => {
  const [globalState, setGlobalState] = useState(stateForm);
  return (
    <Context.Provider value={[globalState, setGlobalState]}>
      {children}
    </Context.Provider>
  );
};
export default FormGlobalState;
