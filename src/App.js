import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 페이지
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
// CSS
import './App.css';
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
