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
  filterFunc,
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
            type="button"
            onClick={filterFunc}
          >
            Search
          </button>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <button
                  // className={
                  //   timeFilter ? "bg-primary accordian-btn filterBtn" : ""
                  // }
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
        </form>
      </nav>
    </div>
  );
};

export default ExploreHeader;
