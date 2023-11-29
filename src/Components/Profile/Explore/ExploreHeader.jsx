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
        className="navbar navbar-explore"
        style={{ marginTop: "50px", height: "80px" }}
      >
        {/* <p className="explore-message">
          Check out what your community is cooking!
        </p> */}
        <form className="search-item" onSubmit={filterFunc}>
          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            onChange={(e) => filterName(e)}
          />

          <button
            className="btn my-2 my-sm-0 search-btn"
            type="submit"
            data-toggle="collapse"
            data-target="#accordian"
          >
            Search
          </button>

          <Accordion className="accordian">
            <Accordion.Item>
              <Accordion.Header className="filter-accordian">
                Filter
              </Accordion.Header>
              <Accordion.Body>
                <button
                  // className={
                  //   timeFilter ? "bg-primary accordian-btn filterBtn" : ""
                  // }
                  href="#/action-1"
                  className="cook-filter"
                  onClick={filterCookTime}
                  value="cookTime"
                >
                  Ready in under 30 minutes
                </button>
                Category:
                <select onChange={filterCategory}>
                  <option className="accordian-btn" value="appetizer">
                    Appetizer
                  </option>
                  <option className="accordian-btn" value="breakfast">
                    Breakfast
                  </option>
                  <option className="accordian-btn" value="lunch">
                    Lunch
                  </option>
                  <option className="accordian-btn" value="dinner">
                    Dinner
                  </option>
                  <option className="accordian-btn" value="dessert">
                    Dessert
                  </option>
                </select>
                <button
                  className="accordian-btn"
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
