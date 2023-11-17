import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MyRecipesHeader = ({ handleSort }) => {
  return (
    <div>
      <nav className="grid-navbar">
        <NavLink to="/create-recipe" href="#">
          <button className="plus-button">+</button>
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
