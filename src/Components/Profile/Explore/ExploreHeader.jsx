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
    <div className="explore-header-grid">
      <nav
        className="navbar navbar-explore"
        style={{
          marginTop: "50px",
          height: "80px",
          display: "grid",
          gap: "100px",
        }}
      >
        <form className="search-item" onSubmit={filterFunc}>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            style={{ marginLeft: "50vw", marginTop: "5vw" }}
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
            <Accordion.Header
              className="filter-accordian"
              style={{ width: "4vw", background: "none" }}
            ></Accordion.Header>
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
          </Accordion>
        </form>
      </nav>
    </div>
  );
};

export default ExploreHeader;
