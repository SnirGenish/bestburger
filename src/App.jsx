import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/GlobalStyle.css";
import "./style/GlobalStyleMobile.css";
import HomePage from "./pages/HomePage/HomePage";
import FormPage from "./pages/FormPage/FormPage";
import ListPage from "./pages/ListPage/ListPage";
import FormGlobalState from "./pages/FormPage/FormGlobalState";
import ResultPage from "./pages/ResultPage/ResultPage";
const App = () => {
  return (
    <FormGlobalState>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Form" element={<FormPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/List" element={<ListPage />} />
        </Routes>
      </Router>
    </FormGlobalState>
  );
};
export default App;
