import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://lit-dawn-51657.herokuapp.com/makeadmin", {
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
    <section className="container-fluid row">
      <Sidebar isAdmin={true}></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">make Admin</h5>
        
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="mail"
              placeholder="Your Mail"
              className="form-control"
            />
            {errors.name && (
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
    </section>
  );
};

export default MakeAdmin;
