import React from "react";

import bnb from "../../../images2/images/logos/airbnb.png";
import slack from "../../../images2/images/logos/slack.png";
import google from "../../../images2/images/logos/google.png";
import uber from "../../../images2/images/logos/uber.png";
import netflix from "../../../images2/images/logos/netflix.png";
import "./BusinessInfo.css";


const BusinessInfo = () => {
  return (
    <section
      style={{ backgroundColor: "white" }}
      className="d-flex justify-content-center small-cards"
    >
      
      <img  src={slack} alt="" className="img-fluid pt-5 pr-4 pl-4" />
      <img src={google} alt="" className="img-fluid pt-5 pr-4 pl-4" />
      <img src={uber} alt="" className="img-fluid pt-5 pr-4 pl-4" />
      <img src={netflix} alt="" className="img-fluid pt-5 pr-4 pl-4" />
      <img src={bnb} alt="" className="img-fluid pt-5 pr-4 pl-4" />
    </section>
  );
};

export default BusinessInfo;
