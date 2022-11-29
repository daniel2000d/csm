import Home from "./pages/Home";
import B from "./pages/B";
import React from "react";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./styles/main.css";

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/b" element={<B />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
