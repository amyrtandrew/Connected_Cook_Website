import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tacos from "./tacos";
import Burger from "./Burger";
import Crepes from "./Crepes";

const PhotoSlide = () => {
  return (
    <div>
      <button className="border-cover"></button>
      <span
        className="explore-message"
        style={{
          position: "absolute",
          color: "white",
          fontSize: "35px",
          bottom: "45vh",
          left: "15vw",
        }}
      >
        <span> Need some inspo?</span> <br />{" "}
        <span style={{ marginLeft: "90px", fontStyle: "italic" }}>
          Try searching for...
        </span>
      </span>
      <div
        className="carousel"
        style={{ textAlign: "center", fontSize: "35px" }}
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
