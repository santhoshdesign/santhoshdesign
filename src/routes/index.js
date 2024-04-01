// Routes.js

import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/Home/index";
import About from "../components/About/index";
import AboutPage from "../components/AboutPage";
import Healthboard from "../components/HealthBoard";
import PatientDashboard from "../components/PatientDashboard";

const AppRoutes = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microsite" element={<About />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/healthboard" element={<Healthboard />} />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
