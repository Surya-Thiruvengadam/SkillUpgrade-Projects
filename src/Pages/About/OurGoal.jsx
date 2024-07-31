import React from "react";
import Lady from "../../assets/Lady.jpg";

const OurGoal = () => {
  return (
    <section className="w-bg">
      <div className=" container about-us-container">
        <img src={Lady} alt="Skill Upgrade" className="swap-item" />
        <div className="about-content">
          <h3>Our Goal</h3>
          <p>
            Our mission at Skill Upgrade is to empower individuals to reach
            their highest potential through transformative skill development. We
            aim to provide a dynamic and practical learning experience that
            fosters growth, innovation, and professional excellence. By offering
            hands-on tasks, real-world applications, and diverse opportunities,
            we set new standards in education and become the catalyst for your
            journey towards success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
