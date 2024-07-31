import React from "react";
import Features from "../../Components/Features/Features";
import scrollToIdWithOffset from "../../Components/Scroll/ScrollToHash";

const AboutBanner = () => {
  return (
    <section>
      <div className="about-section1 sec1-all enlarge-banner">
        <div className="over-lay">
          <div className="container about-banner">
            <div className="banner-content">
              <h1 className="banner-header">About</h1>
              <p>
                At Skill Upgrade, we're dedicated to transforming your learning
                journey. Dive into hands-on experiences across 10+ domains, from
                coding and design to analytics and beyond. Our practical
                approach, expert guidance, and supportive community ensure you
                achieve professional excellence. Start your skill enhancement
                journey with us today!
              </p>
              <a
                className="btn"
                onClick={(event) =>
                  scrollToIdWithOffset(event, "skillupgrade", 80)
                }
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default AboutBanner;
