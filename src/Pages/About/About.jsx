import React from "react";
import "./About.css";
import AboutBanner from "./AboutBanner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import OurGoal from "./OurGoal";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <>
    <AboutBanner/> 
    <AboutUs/>
    <OurGoal/>
    <OurTeam/>
    </>
  );
};

export default About;
