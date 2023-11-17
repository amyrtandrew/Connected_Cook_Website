import React, { Component } from "react";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import ExploreGrid from "../Components/Profile/Explore/ExploreGrid";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoSlide from "../Components/Profile/Explore/PhotoSlide";

const ExplorePage = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [timeFilter, setTimeFilter] = useState(false);
  const [bfastFilter, setBfastFilter] = useState(false);
  const [appFilter, setAppFilter] = useState(false);
  const [lunchFilter, setLunchFilter] = useState(false);
  const [dinnerFilter, setDinnerFilter] = useState(false);
  const [dessertFilter, setDessertFilter] = useState(false);
  const [popFilter, setPopFilter] = useState(false);

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
    setSubmitted(false);
  };

  const filterFunc = () => {
    let recipeData = data;
    setSubmitted(true);
    if (timeFilter) {
      let filteredData = recipeData.filter((i) => i.cooktime < 10);
    }
    if (appFilter) {
      let filteredData = recipeData.filter((i) => i.categoryId === 1);
    }
    if (bfastFilter) {
      let filteredData = recipeData.filter((i) => i.categoryId === 2);
    }
    if (lunchFilter) {
      let filteredData = recipeData.filter((i) => i.categoryId === 3);
    }
    if (dinnerFilter) {
      let filteredData = recipeData.filter((i) => i.categoryId === 4);
    }
    if (dessertFilter) {
      let filteredData = recipeData.filter((i) => i.categoryId === 5);
    }
    if (popFilter) {
      let filteredData = recipeData.filter((i) => i.favorites.length > 0);
    }
  };

  const filterCookTime = (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML);
    setTimeFilter(true);
    console.log(data);
  };

  const filterCategory = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);

    if (e.target.innerHTML === "Appetizer") {
      setappFilter(true);
    }
    if (e.target.innerHTML === "Breakfast") {
      setBfastFilter(true);
    }
    if (e.target.innerHTML === "Lunch") {
      setLunchFilter(true);
      console.log(lunchFilter);
    }
    if (e.target.innerHTML === "Dinner") {
      setDinnerFilter(true);
    }
    if (e.target.innerHTML === "Dessert") {
      setDessertFilter(true);
    }
  };

  const filterPopular = (e) => {
    e.preventDefault();
    setPopFilter(true);
  };

  // let searchResults = data.map((d, i) => {
  //   return <div key={i}>{d.recipeName}</div>;
  // });

  return (
    <div className="home-page">
      <ExploreHeader
        // setSubmited={setSubmited}
        filterName={filterName}
        filterCookTime={filterCookTime}
        filterCategory={filterCategory}
        filterPopular={filterPopular}
        filterFunc={filterFunc}
      />
      {submitted ? <ExploreGrid filtered={filterData} /> : <PhotoSlide />}
      {/* <ExploreGrid filtered={submited ? filterData : data} /> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default ExplorePage;
