import React from "react";
import scrollToIdWithOffset from '../../Components/Scroll/ScrollToHash';

const ContactPageBanner = () => {
  return ( 
    <section>
      <div className="sec1-all enlarge-banner">
        <div className="over-lay">
          <div className="container about-banner">
            <div className="banner-content">
              <h1 className='banner-header'>Contact</h1>
              <p>
                Have questions or ready to start your learning journey with
                Skill Upgrade? We're here to help! Reach out for any inquiries,
                information, or assistance. Our dedicated team is committed to
                providing the support you need to maximize your learning
                experience.
              </p>
              <a className="btn" onClick={ (event)=>scrollToIdWithOffset(event , 'contact-form') }>Connect </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageBanner;
