import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-5 text-white" to="/">
              Home
            </Link>
          </li>
          
          {/* <li className="nav-item">
            <Link className="nav-link mr-5" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/dashboard">
              Admin
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Our Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Our Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="#">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/dashboard">
            <button className="btn btn-success">  Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
