import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.css";

const ExploreHeader = ({
  filterName,
  filterCookTime,
  filterCategory,
  filterPopular,
  filterFunc,
}) => {
  return (
    <div className="explore-header-grid">
      {/* <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
      <Accordion
        className="accordian"
        style={{ marginLeft: "45vw", marginTop: "-8vh" }}
      >
        <Accordion.Header
          // className="accordian-button"
          bg="dark"
          data-bs-theme="dark"
          style={{
            width: "2vw",
            height: "15vh",
            color: "red",
            backgroundColor: "black",
          }}
        >
          <i class="bi bi-filter-square-fill"></i>
          Text
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-filter-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1M4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
          </svg> */}
        </Accordion.Header>
        <Accordion.Body style={{ width: "70vw", marginTop: "30vh" }}>
          <button
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
            style={{
              marginLeft: "50vw",
              marginTop: "3vw",
              borderRadius: "20%",
            }}
            onChange={(e) => filterName(e)}
          />

          <button
            className="btn my-2 my-sm-0 search-btn"
            type="submit"
            data-toggle="collapse"
            data-target="#accordian"
            style={{ marginLeft: "900px", marginTop: "0px" }}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default ExploreHeader;
