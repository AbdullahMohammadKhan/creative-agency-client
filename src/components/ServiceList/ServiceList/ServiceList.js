import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { Table } from "react-bootstrap";

const ServiceList = () => {
  const [serviceslist, setServiceslist] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  

  useEffect(() => {
    console.log("logged in user:" + loggedInUser);
    fetch("https://lit-dawn-51657.herokuapp.com/ordersByMail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setServiceslist(data);
        console.log(data);
      });
  }, [serviceslist, loggedInUser]);

  return (
    <div className="container-fluid row">
      <Sidebar isAdmin={false}></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">
          Service List 
        </h5>
     
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Project Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {serviceslist.map((service) => (
              <tr>
                <td>{service.name}</td>
                <td>{service.email}</td>
                <td>{service.service}</td>
                <td>{service.details}</td>
                <td>{service.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
     
      </div>
    </div>
  );
};

export default ServiceList;
