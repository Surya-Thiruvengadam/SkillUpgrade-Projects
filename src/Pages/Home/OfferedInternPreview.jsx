import React, { Fragment } from "react";
import Domains from "../../Data/InternshipDomains.json";
import InternshipCard from "../../Components/Internship/InternshipCard";
import DomainsImg from "../../Components/Internship/DomainsImg";
import { Link } from "react-router-dom";

const OfferedInternPreview = () => {
  const internDomains = Domains.slice(0, 4);

  return (
    <section className="container" style={{ marginBlock: "50px" }}>
      <div>
        <h1 className="heading"> Offered Interships Domains </h1>
        <ul>
          {internDomains.map((domain) => (
            <Fragment key={domain.id}>
              <InternshipCard
                DomainImage={DomainsImg[domain.id]}
                DomainName={domain.DomainName}
                Domaindescrip={domain.Domaindescrip}
              />
            </Fragment>
          ))}
        </ul>
        <div className="view-btn-wrap">
          <Link
            to="/Internship"
            className="btn"
            style={{ paddingInline: "4rem", fontSize: "1.7rem" }}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferedInternPreview;
