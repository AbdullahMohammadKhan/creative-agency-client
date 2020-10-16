import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import ServiceDetail from "../ServiceDetail/ServiceDetail";



const Services = () => {
  const [serviceslist, setServiceslist] = useState([]);

  

  useEffect(() => {
    fetch("https://lit-dawn-51657.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceslist(data);
        console.log(data);
      });
  }, []);

  return (
    <section className="services-container mt-5">
      <div className="text-center">
        
        <h2>Provide Awesome <span style={{ color:"green"}}>Services</span> </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceslist.map((service) => (
             <ServiceDetail service={service} key={service.name}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
