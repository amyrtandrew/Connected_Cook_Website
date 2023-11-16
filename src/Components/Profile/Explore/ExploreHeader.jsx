import React, { useEffect, useState } from "react";
import RecipeGrid from "./ExploreGrid";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

const ExploreHeader = ({ handleFilter, handleFunnel }) => {
  return (
    <div className="explore-header">
      <nav
        className="navbar navbar-light justify-content-between"
        style={{ marginTop: "50px", height: "80px" }}
      >
        <p className="explore-message">
          Check out what your community is cooking!
        </p>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => handleFilter(e.target.value)}
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={handleFunnel}>
                Ready in under 30 minutes
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Breakfast</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Serves large groups (10 or more)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">Vegetarian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
            onClick={handleFunnel}
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg> */}
        </form>
      </nav>
    </div>
  );
};

export default ExploreHeader;
