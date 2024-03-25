// Routes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/index";
import About from "../components/About/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
