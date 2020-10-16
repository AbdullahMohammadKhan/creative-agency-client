import React, { useContext, useEffect, useState } from "react";
//import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
//import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";
//import Order from "../Order/Order";
import Order from "../../Order/Order/Order";
//import ServiceList from "../../ServiceList/ServiceList/ServiceList";
import AllPatients from "../../AllPatients/AllPatients/AllPatients";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  border: "1px solid red",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [appointments, setAppointments] = useState([]);
  //   const [currentPage, setCurrentPage] = useState("Order");

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  // useEffect(() => {
  //   fetch("https://salty-plateau-71286.herokuapp.com/appointmentsByDate", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, [selectedDate]);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://lit-dawn-51657.herokuapp.com/isadmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        console.log("admin:" + data);
      });
  }, []);

  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar isAdmin={isAdmin}></Sidebar>
        </div>
        {isAdmin ? <AllPatients /> : <Order />}
      </div>
    </section>
  );
};

export default Dashboard;
