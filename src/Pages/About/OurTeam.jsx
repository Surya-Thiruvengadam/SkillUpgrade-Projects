import React from "react";
import Team from "../../assets/Team Work.jpg";

const OurTeam = () => {
  return (
    <section className="dblue-bg">
      <div className=" container about-us-container">
        <img src={Team} alt="Skill Upgrade" />
        <div className="about-content ">
          <h4 className="w01"> Our Team </h4>
          <p className="w02">
            As an ECE student, I understand the struggle of finding affordable
            internships. That's why at Skill Upgrade, we’re dedicated to making
            practical learning accessible. Our ECE team curates budget-friendly,
            hands-on experiences that deliver essential skills. Skill Upgrade
            isn’t just a platform; it’s a community that gets you. Join us and
            bridge the gap between classroom learning and your future career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
