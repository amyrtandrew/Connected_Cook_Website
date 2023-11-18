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
          <Carousel.Caption>
            <h3>Chicken Tacos</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Burger text="Southwest Burger" />
          <Carousel.Caption>
            <h3>Southwest Burger</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Crepes />
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Stawberry Banana Crepes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PhotoSlide;
