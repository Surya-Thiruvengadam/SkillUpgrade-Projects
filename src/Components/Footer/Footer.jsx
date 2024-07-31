import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className=" container footerContainer">
        <div className="socialIcons">
          <a href="">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href="">
          <FontAwesomeIcon icon={faInstagram}/> 
          </a>
          <a href="">
          <FontAwesomeIcon icon={faTwitter}/> 
          </a>
          <a href="">
          <FontAwesomeIcon icon={faLinkedinIn}/> 
          </a>
          <a href="">
          <FontAwesomeIcon icon={faYoutube}/>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/About'>About</Link>
            </li>
            <li>
            <Link to='/Contact'>Contact</Link>
            </li> 
            <li>
            <Link to='/Internship'>Internship</Link>
            </li>
            <li>
            <Link to='/Verify'>Verify</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2024; Designed by <span className="designer">Surya</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
