import React, { useEffect, useState } from "react";
import RecipeGrid from "./ExploreGrid";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";

const ExploreHeader = ({
  filterName,
  filterCookTime,
  filterCategory,
  filterPopular,
}) => {
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
            onChange={(e) => filterName(e.target.value)}
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <button
                  className="accordian-btn"
                  href="#/action-1"
                  onClick={filterCookTime}
                >
                  Ready in under 30 minutes
                </button>
                Category:
                <button
                  className="accordian-btn"
                  href="#/action-2"
                  onClick={filterCategory}
                >
                  Appetizer
                </button>
                <button
                  className="accordian-btn"
                  href="#/action-3"
                  onClick={filterCategory}
                >
                  Breakfast
                </button>
                <button
                  className="accordian-btn"
                  href="#/action-4"
                  onClick={filterCategory}
                >
                  Lunch
                </button>
                <button
                  className="accordian-btn"
                  href="#/action-5"
                  onClick={filterCategory}
                >
                  Dinner
                </button>
                <button
                  className="accordian-btn"
                  href="#/action-6"
                  onClick={filterCategory}
                >
                  Dessert
                </button>
                <button
                  className="accordian-btn"
                  href="#/action-3"
                  onClick={filterPopular}
                >
                  Popular
                </button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

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
