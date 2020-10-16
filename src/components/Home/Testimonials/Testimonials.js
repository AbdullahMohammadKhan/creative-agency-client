import React, { useState, useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";




const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://lit-dawn-51657.herokuapp.com/reviews", {})
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log("data:" + reviews);
      });
  }, []);
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          
          <h3 className="text-center">Clients <span style={{color:"green"}}>Feedback</span> </h3>
        </div>
       
        <div className="card-deck  mt-5">
          {reviews.map((review) => (
            <Testimonial review={review} key={review.name} />
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Testimonials;
