import React from "react";
import scrollToIdWithOffset from "../../Components/Scroll/ScrollToHash";

const InternshipPageBanner = () => {
  return (
    <section>
      <div className="sec1-all enlarge-banner">
        <div className="over-lay">
          <div className="container">
            <div className="banner-content">
              <h1 className="banner-header">InternShip</h1>
              <p>
                Kickstart your career with Skill Upgrade internships! Gain
                hands-on experience, practical skills, and expert mentorship in
                various domains, including web development, app development,
                data analysis, cybersecurity, Java, Python, C++ programming, and
                UI/UX design. Join us and bridge the gap between classroom
                learning and your professional future.
              </p>
              <a
                className="btn"
                onClick={(event) => scrollToIdWithOffset( event , "internships")}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipPageBanner;
