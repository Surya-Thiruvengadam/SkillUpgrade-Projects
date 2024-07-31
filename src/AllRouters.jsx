import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Pages/Home/HomeMain.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Internship from "./Pages/Internship/Internship.jsx";
import Verify from "./Pages/Verify/Verify.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import ScrollToTop from "./Components/Scroll/ScrollToTop.jsx";

const AllRouters = () => {
  return (
    <main>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Internship" element={<Internship />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default AllRouters;
