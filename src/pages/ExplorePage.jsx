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

  const filterName = (value) => {
    const res = data.filter((f) => f.recipeName.toLowerCase().includes(value));
    setFilterData(res);
  };

  const filterCookTime = (e) => {
    console.log(e.target.innerHTML);
    const res = data.filter((f) => f.cookTime < 10);
    setFilterData(res);
    console.log(data);
  };

  const filterCategory = (e) => {
    console.log(e.target.innerHTML);

    if (e.target.innerHTML === "Appetizer") {
      const res = data.filter((f) => f.categoryId === 1);
      setFilterData(res);
    }
    if (e.target.innerHTML === "Breakfast") {
      const res = data.filter((f) => f.categoryId === 2);
      setFilterData(res);
    }
    if (e.target.innerHTML === "Lunch") {
      const res = data.filter((f) => f.categoryId === 3);
      setFilterData(res);
    }
    if (e.target.innerHTML === "Dinner") {
      const res = data.filter((f) => f.categoryId === 4);
      setFilterData(res);
    }
    if (e.target.innerHTML === "Dessert") {
      const res = data.filter((f) => f.categoryId === 5);
      setFilterData(res);
    }
  };

  const filterPopular = () => {
    const res = data.filter((f) => f.favorites.length > 0);
    setFilterData(res);
    console.log(data);
  };
  //   const res = data.filter((f) => f.categorId === 1);
  //   setFilterData(res);
  //   console.log(data);
  // };

  // const handlePopular = () => {
  //   const res = data.filter((f) => f.cookTime < 10);
  //   setFilterData(res);
  //   console.log(data);
  // };

  // let searchResults = data.map((d, i) => {
  //   return <div key={i}>{d.recipeName}</div>;
  // });

  return (
    <div className="home-page">
      <ExploreHeader
        filterName={filterName}
        filterCookTime={filterCookTime}
        filterCategory={filterCategory}
        filterPopular={filterPopular}
      />
      <ExploreGrid filtered={filterData} />
      <Outlet />
    </div>
  );
};

export default ExplorePage;
