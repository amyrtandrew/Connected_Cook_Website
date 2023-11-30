import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tacos from "./tacos";
import Burger from "./Burger";
import Crepes from "./Crepes";

const PhotoSlide = () => {
  return (
    <div>
      <p
        className="explore-message"
        style={{
          position: "absolute",
          color: "white",
          fontSize: "35px",
          bottom: "45vh",
        }}
      >
        Need some inspo? <br> Try seaching... </br>
      </p>
      <div
        className="carousel"
        style={{ textAlign: "center", fontSize: "20px" }}
      >
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
    </div>
  );
};

export default PhotoSlide;
