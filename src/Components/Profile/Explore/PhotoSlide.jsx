import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tacos from "./tacos";
import Burger from "./Burger";
import Crepes from "./Crepes";

const PhotoSlide = () => {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Tacos text="chicken tacos" />
          <h3 className="carousel-text">Chicken Tacos</h3>
        </Carousel.Item>
        <Carousel.Item className="carousel-image">
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Burger text="Southwest Burger" />
          <h3 className="carousel-text">Southwest Burger</h3>
        </Carousel.Item>
        <Carousel.Item className="carousel-image">
          <Crepes />
          <h3 className="carousel-text">Stawberry Banana Crepes</h3>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PhotoSlide;
