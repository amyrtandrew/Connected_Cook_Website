import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MyRecipesHeader = ({ handleSort }) => {
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
        {/* <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort
          </Dropdown.Toggle>
          <Dropdown.Menu onChange={handleSort}>
            <Dropdown.Item value="category" href="#/action-2">
              Category
            </Dropdown.Item>
            <Dropdown.Item value="alphabetical" href="#/action-3">
              A-Z
            </Dropdown.Item>
            <Dropdown.Item value="favorites" href="#/action-4">
              Favorites
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <select onChange={handleSort}>
          <option className="accordian-btn" href="#/action-2" value="category">
            Category
          </option>
          <option
            className="accordian-btn"
            href="#/action-3"
            value="alphabetical"
          >
            A-Z
          </option>
          <option className="accordian-btn" href="#/action-4" value="favorites">
            Favorites
          </option>
        </select>
      </nav>
    </div>
  );
};

export default MyRecipesHeader;
