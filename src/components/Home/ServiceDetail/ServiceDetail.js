import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion"

const ServiceDetail = ({ service }) => {
  const history = useHistory();

    const handleClick = () => {
        history.push("/dashboard");
    }
    
  return (
   
    <motion.div drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  whileHover={{ scale: 1.24 }}
  whileTap={{ scale: 0.9 }} onClick={handleClick} className="col-md-4 text-center">
      {service.image ? <img style={{ height: "50px" }} alt="image" src={`data:image/png;base4,${service.image.img}`} />  : 
        <img
        style={{ height: "50px" }}
        src={`https://lit-dawn-51657.herokuapp.com/${service.img}`}
        alt=""
      />}
      <h5 className="mt-3 mb-3">{service.title}</h5>
      <p className="text-secondary">{service.description}</p>
    </motion.div>
    
  );
};

export default ServiceDetail;
