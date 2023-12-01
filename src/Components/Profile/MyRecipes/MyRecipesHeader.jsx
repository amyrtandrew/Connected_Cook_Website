import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MyRecipesHeader = ({ changeCat }) => {
  return (
    <div>
      <nav className="grid-navbar">
        <NavLink to="/create-recipe" href="#">
          <button
            className="btn"
            style={{
              backgroundColor: "royalblue",
              color: "white",
              marginLeft: "61vw",
              position: "absolute",
              display: "flex",

              width: "fit-content",
            }}
          >
            Add Recipe
          </button>
        </NavLink>
        <form>
          <select
            style={{
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              marginLeft: "1vw",
              position: "relative",
              display: "flex",
              width: "fit-content",
              height: "5vh",
              marginTop: "25vh",
              textAlign: "center",
            }}
            className="dropdown"
            onChange={(e) => changeCat(e)}
          >
            <option className="accordian-btn" value="alphabetical">
              A-Z
            </option>
            <option className="accordian-btn" value="personal">
              Personal
            </option>
            <option className="accordian-btn" value="favorites">
              Favorites
            </option>
          </select>
        </form>
      </nav>
    </div>
  );
};

export default MyRecipesHeader;
