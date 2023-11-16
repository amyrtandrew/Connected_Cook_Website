import React, { Component } from "react";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import ExploreGrid from "../Components/Profile/Explore/ExploreGrid";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const ExplorePage = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/all-recipes")
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

  const handleFunnel = () => {
    const res = data.filter((f) => f.cookTime < 10);
    setFilterData(res);
    console.log(data);
  };

  // let searchResults = data.map((d, i) => {
  //   return <div key={i}>{d.recipeName}</div>;
  // });

  return (
    <div className="home-page">
      <ExploreHeader handleFilter={handleFilter} handleFunnel={handleFunnel} />
      <ExploreGrid filtered={filterData} />
      <Outlet />
    </div>
  );
};

export default ExplorePage;
