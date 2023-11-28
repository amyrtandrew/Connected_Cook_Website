import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MyRecipesHeader = ({ changeCat }) => {
  return (
    <div>
      <nav className="grid-navbar">
        <NavLink to="/create-recipe" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square-fill plus-icon"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
          </svg>
        </NavLink>
        <form>
          <select onChange={(e) => changeCat(e)}>
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
