import React, { Fragment } from "react";
import InternshipCard from "../../Components/Internship/InternshipCard";
import Domains from "../../Data/InternshipDomains.json";
import DomainsImg from "../../Components/Internship/DomainsImg";
const OfferedInternships = () => {
  return (
    <section
      id="internships"
      className="container internships-box"
      style={{ marginBlock: "50px" }}
    >
      <h1 className="heading"> Offered Internships Domains </h1>
      <ul>
        {Domains.map((domain) => (
          <Fragment key={domain.id}>
            <InternshipCard
              DomainImage={DomainsImg[domain.id]}
              DomainName={domain.DomainName}
              Domaindescrip={domain.Domaindescrip}
            />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default OfferedInternships;
