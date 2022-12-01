import Home from "./pages/Home";
import Meciuri from "./pages/meciuri";
import React from "react";
import FormikFormDemo from "./Components/Login";
import Despre from "./pages/Despre";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./styles/main.css";

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />

          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/meciuri" element={<Meciuri />} />
          <Route exact path="/Despre" element={<Despre />} />
          <Route exact path="/login" element={<FormikFormDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
