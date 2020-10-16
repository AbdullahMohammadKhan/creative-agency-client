import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../../../images2/images/carousel-1.png";
import photo2 from "../../../images2/images/carousel-2.png";
import photo3 from "../../../images2/images/carousel-3.png";
// import photo1 from "../../../images2/images/carousel-1.png";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ height: "25%" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            //   src="holder.js/800x400?text=First slide&bg=373940"
            src={photo1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            //   src="holder.js/800x400?text=Second slide&bg=282c34"
            src={photo2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block h-5 w-100"
            //   src="holder.js/800x400?text=Third slide&bg=20232a"
            src={photo3}
            //   src={`${photo1}/800x400?text=Third slide&bg=20232a`}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
