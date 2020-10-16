import React, { useEffect, useState } from "react";

import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { Table } from "react-bootstrap";

const AllPatients = () => {
  const [orders, setOrders] = useState([]);

  

  useEffect(() => {
    fetch("https://lit-dawn-51657.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container-fluid row">
      <Sidebar isAdmin={true}></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">
          Service list: 
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
            {orders.map((service) => (
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

export default AllPatients;
