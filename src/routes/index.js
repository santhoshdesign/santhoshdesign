// Routes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/index";
import About from "../components/About/index";
import AboutPage from "../components/AboutPage";
import Healthboard from "../components/HealthBoard";
import PatientDashboard from "../components/PatientDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/microsite" element={<About />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/healthboard" element={<Healthboard />} />
      <Route path="/patientdashboard" element={<PatientDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
