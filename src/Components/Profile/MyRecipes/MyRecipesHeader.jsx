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
              backgroundColor: "black",
              color: "white",
              position: "relative",
              display: "flex",
              marginLeft: "60vw",
              marginTop: "20vh",
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
              position: "relative",
              display: "flex",
              marginLeft: "60vw",
              marginTop: "20vh",
            }}
            onChange={(e) => changeCat(e)}
          >
            <option className="accordian-btn" value="category">
              Category
            </option>
            <option className="accordian-btn" value="personal">
              Personal
            </option>
            <option className="accordian-btn" value="favorites">
              Favorites
            </option>
            <option className="accordian-btn" value="alphabetical">
              A-Z
            </option>
          </select>
        </form>
      </nav>
    </div>
  );
};

export default MyRecipesHeader;
