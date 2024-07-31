import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [slide, setSlide] = useState(false);

  const handleSlide = () => {
    if (slide) {
      setSlide(false);
    } else {
      setSlide(true);
    }
  };
  return (
    <header>
      <div className="contact-hed">
        <div className="container">
          <div className="social-links-wrap">
            <div className="social-media">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </div>
            <div className="social-media">
              <li>
                <a href="#" className="phone-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={slide ? "main-menu slide-active" : "main-menu"}>
          <div className="container">
            <div className="slide-par">
              <div id="logo">
                <Link to="/">
                  Skill <span>Upgrade</span>
                </Link>
              </div>
              <div className="slide" onClick={handleSlide}>
                <span></span>
                <div>
                  <span></span>
                  <span></span>
                </div>
                <span></span>
              </div>
              <div className="nav-links">
                <nav>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/About">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Internship">Internship</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Verify">Verify</NavLink>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
