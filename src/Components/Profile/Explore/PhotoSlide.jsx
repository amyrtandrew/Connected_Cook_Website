import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tacos from "./tacos";
import Burger from "./Burger";
import Crepes from "./Crepes";
import { Link } from "react-router-dom";

const PhotoSlide = () => {
  return (
    <div>
      <h1
        style={{
          color: "rgb(255 255 255 / 77%)",
          fontSize: "25px",
          position: "absolute",
          display: "flex",
          marginTop: "-4vh",
          width: "fit-content",
          marginLeft: "19vw",
          paddingLeft: "12vw",
          paddingRight: "12vw",
          textAlign: "center",
          height: "10vh",
        }}
      >
        The Holidays Are Here!
      </h1>
      <div
        className="container blog-grid"
        style={{
          marginLeft: "30vw",
        }}
      >
        <Link to={`/blog1`} className="col-md blog-square">
          {" "}
          <h1
            className="blog-title"
            style={{ color: "black", fontSize: "20px" }}
          >
            <span>Tips for a stress-free</span> <br />{" "}
            <span>Christmas Dinner</span>
          </h1>
          <img
            className="blog-square"
            src="data:image/jpeg;base64,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"
          />
        </Link>
        <Link to={`/blog1`} className="col-md blog-square">
          {" "}
          <h1
            className="blog-title"
            style={{ color: "black", fontSize: "20px" }}
          >
            <span>Fun Appetizers For Your</span> <br />{" "}
            <span>Next Christmas Pary</span>
          </h1>
          <img
            className="blog-square"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rkh6zRMkPicK9Oy6awlelF1Ta0J1Y_olAw&usqp=CAU"
          />
        </Link>
        <Link to={`/blog1`} className="col-md blog-square">
          {" "}
          <h1
            className="blog-title"
            style={{ color: "black", fontSize: "20px" }}
          >
            <span>Holiday Feasts</span> <br /> <span>On A Budget</span>
          </h1>
          <img
            className="blog-square"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAyal6vkoB2bg5FNDtgQL14WKYRnuhOpktiWz8g1wU6EOvUOVkuewGVqwmXQxxkzEaxw&usqp=CAU"
          />
        </Link>
        <Link to={`/blog1`} className="col-md blog-square">
          {" "}
          <h1
            className="blog-title"
            style={{ color: "black", fontSize: "20px" }}
          >
            <span>How To Make The </span> <br /> <span>Best Eggnog</span>
          </h1>
          <img
            className="blog-square"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp9GsEL_PbvfMmVOhTxrPRc8Wy2sY94p0Kg&usqp=CAU"
          />
        </Link>
      </div>
      <img
        className="snoop"
        style={{
          position: "absolute",
          display: "relative",
          top: "48vh",
          left: "12vw",
          width: "30vw",
          height: "56vh",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src="https://static.themarthablog.com/2018/05/DSC04740.jpg"
      />
      <h1
        style={{
          position: "absolute",
          display: "relative",
          top: "37vh",
          left: "12vw",
          color: "rgb(255 255 255 / 77%)",
          fontSize: "30px",
        }}
      >
        <span>Watch: Snoop Dogg Rates</span>
        <br /> <span> Your Favorite Recipes</span>
      </h1>
    </div>
  );
};

export default PhotoSlide;
