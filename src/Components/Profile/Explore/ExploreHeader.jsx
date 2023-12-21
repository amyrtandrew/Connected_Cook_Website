import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ExploreHeader = ({
  filterName,
  filterCookTime,
  filterCategory,
  filterPopular,
  filterFunc,
  selectedCook,
  selectedPop,
}) => {
  return (
    <div className="explore-header-grid">
      <div
        className="filter-form"
        style={{
          position: "absolute",
          marginTop: "12vh",
          marginLeft: "51vw",
          padding: "10px",
        }}
      >
        <button
          href="#/action-1"
          className={`cook-filter ${
            selectedCook === "cookTime" ? "selected" : "cook-filter"
          }`}
          onClick={filterCookTime}
          value="cookTime"
        >
          &#x3c; 30 min
        </button>
        <button
          className={`cook-filter ${
            selectedPop === "popular" ? "selected" : "cook-filter"
          }`}
          value="popular"
          onClick={filterPopular}
        >
          Popular
        </button>
        <select
          onChange={filterCategory}
          style={{
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            height: "40px",
          }}
        >
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
      </div>
      <nav
        className="navbar navbar-explore"
        style={{
          marginTop: "50px",
          height: "80px",
          display: "grid",
          gap: "100px",
        }}
      >
        <form onSubmit={filterFunc}>
          <input
            type="text"
            placeholder="Search"
            style={{
              marginLeft: "45vw",
              marginRight: "auto",
              marginTop: "3vw",
              borderRadius: "20px",
              width: "20vw",
            }}
            onChange={(e) => filterName(e)}
          />
        </form>
        <button
          className="btn my-2 my-sm-0 search-btn"
          type="submit"
          data-toggle="collapse"
          data-target="#accordian"
          style={{
            position: "absolute",
            marginBottom: "15vh",
            marginLeft: "66vw",
            marginRight: "1vw",
            top: "6.5vh",
            backgroundColor: "#7694CC",
          }}
        >
          Search
        </button>
      </nav>
    </div>
  );
};

export default ExploreHeader;
