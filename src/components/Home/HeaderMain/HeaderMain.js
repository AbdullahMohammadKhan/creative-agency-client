import React from "react";
//import { Link } from "react-router-dom";
//import chair from "../../../images/chair.png";
import frame from "../../../images2/images/logos/Frame.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h1 style={{ color: "black" }}>
          Let's Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        {/* <Link to="/appointment" className="btn btn-brand">
          GET APPOINTMENT
        </Link> */}
        <button className="btn btn-primary">Hire Us</button>
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        {/* <img src={chair} alt="" className="img-fluid" /> */}
        <img src={frame} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
