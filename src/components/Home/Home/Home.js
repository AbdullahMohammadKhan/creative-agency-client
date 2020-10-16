import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";

import Testimonials from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import Services from "../Services/Services";

import Footer from "../../Shared/Footer/Footer";
import BusinessInfo from "../BusinessInfo/BusinessInfo";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BusinessInfo />
      <Services></Services>
      <FeaturedService></FeaturedService>
      
      <Testimonials></Testimonials>
      
      <Footer></Footer>
    </div>
  );
};

export default Home;
