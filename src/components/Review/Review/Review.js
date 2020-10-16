import React, { useEffect, useState } from "react";
//import AppointmentDataTable from "../../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
const Review = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://lit-dawn-51657.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
      })
      .then((success) => {
        if (success) {
          alert("review created successfully.");
        }
      });
  };
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Review</h5>
        {/* <AppointmentDataTable appointments={appointments} /> */}
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="companyname"
              placeholder="Company's Name, Designation"
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="description"
              placeholder="Description"
              className="form-control"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn btn-brand">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
