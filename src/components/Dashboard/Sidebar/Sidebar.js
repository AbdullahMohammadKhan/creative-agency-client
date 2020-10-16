import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faSignOutAlt,
  faCalendar,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = ({ isAdmin }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {!isAdmin && (
          <div>
            <li>
              <Link to="/order" className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Order</span>
              </Link>
            </li>
            <li>
              <Link to="/servicelist" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>service list</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>review</span>
              </Link>
            </li>
          </div>
        )}

        {isAdmin && (
          <div>
            <li>
              <Link to="/allPatients" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>Service List</span>
              </Link>
            </li>
            <li>
              <Link to="/addDoctor" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Add service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeadmin" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
              </Link>
            </li>
            
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
