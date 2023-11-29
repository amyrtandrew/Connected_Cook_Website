import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tacos from "./tacos";
import Burger from "./Burger";
import Crepes from "./Crepes";

const PhotoSlide = () => {
  return (
    <div className="carousel">
      <p className="explore-message">Need some inspo? Try seaching...</p>
      <Carousel>
        <Carousel.Item>
          <h3 className="carousel-text">Chicken Tacos</h3>
          <Tacos text="chicken tacos" />
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="carousel-text">Southwest Burger</h3>
          <Burger text="Southwest Burger" />
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="carousel-text">Crepes</h3>
          <Crepes />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PhotoSlide;
