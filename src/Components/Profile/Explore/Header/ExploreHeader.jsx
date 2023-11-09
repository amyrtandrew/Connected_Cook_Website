import React, { useEffect, useState } from "react";
import RecipeGrid from "../../MyRecipes/RecipeGrid";
import axios from "axios";

const ExploreHeader = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/all-recipes")
      // .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        setData(data);
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (value) => {
    const res = data.filter((f) => f.recipeName.toLowerCase().includes(value));
    setFilterData(res);
  };

  let searchResults = data.map((d, i) => {
    return <div key={i}>{d.recipeName}</div>;
  });
  return (
    <div>
      <nav
        className="navbar navbar-light bg-light justify-content-between"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </form>
      </nav>
      <RecipeGrid filtered={filterData} />
    </div>
  );
};

export default ExploreHeader;
