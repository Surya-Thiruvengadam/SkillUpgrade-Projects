import React from "react";
import worker from "../../assets/worker.jpg";

const AboutUs = () => {
  return (
    <section className="black-bg" id="skillupgrade">
      <div className=" container about-us-container">
        <img src={worker} alt="Skill Upgrade" />
        <div className="about-content">
          <h1 className="w01"> Who we are ?</h1>
          <p>
            Skill Upgrade is a forward-thinking platform dedicated to
            revolutionizing skill development. With offerings across 10+ diverse
            domains, we are committed to providing high-quality education that
            goes beyond theoretical knowledge. We believe in hands-on learning,
            real-world applications, and fostering a community of continuous
            growth and innovation. At Skill Upgrade, we strive to unlock the
            potential within each individual, guiding them on their path to
            professional excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
