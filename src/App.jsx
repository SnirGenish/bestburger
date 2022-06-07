import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/GlobalStyle.css";
import "./style/GlobalStyleMobile.css";
import HomePage from "./pages/HomePage/HomePage";
import FormPage from "./pages/FormPage/FormPage";
import ListPage from "./pages/ListPage/ListPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Form" element={<FormPage />} />
        <Route path="/List" element={<ListPage />} />
      </Routes>
    </Router>
  );
};
export default App;
