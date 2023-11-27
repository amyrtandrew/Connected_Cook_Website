import React, { useEffect, useState } from "react";
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
        className="navbar justify-content-between navbar-explore"
        style={{ marginTop: "50px", height: "80px" }}
      >
        {/* <p className="explore-message">
          Check out what your community is cooking!
        </p> */}
        <form className="form-inline search-items">
          <input
            className="form-control mr-sm-2 search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => filterName(e.target.value)}
          />

          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="button"
            onClick={filterName}
            data-toggle="collapse"
            data-target="#accordian"
          >
            Search
          </button>

          <Accordion className="accordian">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <button
                  // className={
                  //   timeFilter ? "bg-primary accordian-btn filterBtn" : ""
                  // }
                  href="#/action-1"
                  onClick={filterCookTime}
                  value="cookTime"
                >
                  Ready in under 30 minutes
                </button>
                Category:
                <select onChange={filterCategory}>
                  <option
                    className="accordian-btn"
                    href="#/action-2"
                    value="appetizer"
                  >
                    Appetizer
                  </option>
                  <option
                    className="accordian-btn"
                    href="#/action-3"
                    value="breakfast"
                  >
                    Breakfast
                  </option>
                  <option
                    className="accordian-btn"
                    href="#/action-4"
                    value="lunch"
                  >
                    Lunch
                  </option>
                  <option
                    className="accordian-btn"
                    href="#/action-5"
                    value="dinner"
                  >
                    Dinner
                  </option>
                  <option
                    className="accordian-btn"
                    href="#/action-6"
                    value="dessert"
                  >
                    Dessert
                  </option>
                </select>
                <button
                  className="accordian-btn"
                  href="#/action-3"
                  value="popular"
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
