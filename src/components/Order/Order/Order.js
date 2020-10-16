import React from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
const Order = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
   
    data.status = "pending";

    console.log(data);

    fetch("https://lit-dawn-51657.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Appointment created successfully.");
        }
      });
  };

  return (
    <div className="container-fluid row">
      <Sidebar isAdmin={false}></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Order</h5>

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
              name="email"
              placeholder="Email"
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
              name="service"
              placeholder="Service Name"
              className="form-control"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="details"
              placeholder="Project Details"
              className="form-control"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="price"
              placeholder="Price"
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

export default Order;
