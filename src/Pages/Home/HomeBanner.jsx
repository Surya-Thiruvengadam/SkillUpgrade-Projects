import React from "react";
import Features from '../../Components/Features/Features'

const HomeBanner = () => { 
  return (
    <section> 
      <div className="home-main sec1-all enlarge-banner">
        <div className="over-lay">
          <div className="container">
            <div className="banner-content">
              <h1 className="hpage-header">Shape the Future with Skill Upgrade!</h1>
              <p>
                Step into a world where your ambitions meet real opportunities.
                At Skill Upgrade, we’re dedicated to offering internships that
                provide you with hands-on experience and practical skills.
              </p>
              <button className="btn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <Features/>
    </section>
  );
};


export default HomeBanner;
