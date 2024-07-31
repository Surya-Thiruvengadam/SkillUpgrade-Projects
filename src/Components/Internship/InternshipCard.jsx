import React from "react";
import "./InternshipCard.css";

const InternshipCard = ({ DomainImage, DomainName, Domaindescrip }) => {
  return (
    <li className="domain-card">
      <img src={DomainImage} alt={DomainName} />
      <div>
        <h1>{DomainName}</h1>
        <p>{Domaindescrip}</p>
        <a href="#" className="btn">
          Apply Now
        </a>
      </div>
    </li>
  );
};

export default InternshipCard;
