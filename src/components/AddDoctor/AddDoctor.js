import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("description", info.description);

    fetch("https://lit-dawn-51657.herokuapp.com/addservices", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container-fluid row">
      <Sidebar isAdmin={true}></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add service</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Upload an image2</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;