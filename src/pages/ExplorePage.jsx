import React, { Component } from "react";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import ExploreGrid from "../Components/Profile/Explore/ExploreGrid";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoSlide from "../Components/Profile/Explore/PhotoSlide";
import NavBar from "../Components/NavBar/NavBar";

const ExplorePage = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [timeFilter, setTimeFilter] = useState(false);
  const [nameFilter, setNameFilter] = useState(false);
  const [bfastFilter, setBfastFilter] = useState(false);
  const [appFilter, setAppFilter] = useState(false);
  const [lunchFilter, setLunchFilter] = useState(false);
  const [dinnerFilter, setDinnerFilter] = useState(false);
  const [dessertFilter, setDessertFilter] = useState(false);
  const [popFilter, setPopFilter] = useState(false);
  const [input, setInput] = useState("");

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

  const filterFunc = (e) => {
    e.preventDefault();
    console.log(`time: ${timeFilter}`);
    console.log(`app: ${appFilter}`);
    console.log(`breakfast: ${bfastFilter}`);
    console.log(`lunch: ${lunchFilter}`);
    console.log(`dinner: ${dinnerFilter}`);
    console.log(`dessert: ${dessertFilter}`);

    let filteredData = [...data];
    // console.log(filteredData);
    setSubmitted(true);
    if (timeFilter) {
      filteredData = filteredData.filter((i) => i.cookTime < 30);
      // setFilterData(filteredData);
      console.log(filteredData);
    }
    if (nameFilter) {
      filteredData = filteredData.filter((i) =>
        i.recipeName.toLowerCase().includes(input)
      );
      // setFilterData(filteredData);
    }
    if (appFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 1);
      console.log(filteredData);
    }
    if (bfastFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 2);
      console.log(filteredData);
    }
    if (lunchFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 3);
    }
    if (dinnerFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 4);
    }
    if (dessertFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 5);
    }
    if (popFilter) {
      filteredData = filteredData.filter((i) => i.favorites.length > 0);
    }

    setFilterData(filteredData);
    console.log(filteredData);
  };

  const filterCookTime = (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML);
    setTimeFilter(true);
    console.log(data);
  };

  const filterName = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setNameFilter(true);
    console.log(data);
  };

  const filterCategory = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value === "appetizer") {
      setAppFilter(true);
      setBfastFilter(false);
      setLunchFilter(false);
      setDinnerFilter(false);
      setDessertFilter(false);
    }
    if (e.target.value === "breakfast") {
      setBfastFilter(true);
      setAppFilter(false);
      setLunchFilter(false);
      setDinnerFilter(false);
      setDessertFilter(false);
    }
    if (e.target.value === "lunch") {
      setLunchFilter(true);
      setBfastFilter(false);
      setAppFilter(false);
      setDinnerFilter(false);
      setDessertFilter(false);
      console.log(lunchFilter);
    }
    if (e.target.value === "dinner") {
      setDinnerFilter(true);
      setBfastFilter(false);
      setLunchFilter(false);
      setAppFilter(false);
      setDessertFilter(false);
    }
    if (e.target.value === "dessert") {
      setDessertFilter(true);
      setBfastFilter(false);
      setLunchFilter(false);
      setDinnerFilter(false);
      setAppFilter(false);
    }
  };

  const filterPopular = (e) => {
    e.preventDefault();
    setPopFilter(true);
  };

  return (
    <>
      <NavBar />
      <div className="flexbox-container home-page">
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
        <img
          style={{
            position: "absolute",
            display: "relative",
            top: "48vh",
            left: "12vw",
            width: "30vw",
            height: "56vh",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src="https://static.themarthablog.com/2018/05/DSC04740.jpg"
        />
        <h1
          style={{
            position: "absolute",
            display: "relative",
            top: "37vh",
            left: "12vw",
            color: "rgb(255 255 255 / 77%)",
            fontSize: "30px",
          }}
        >
          <span>Watch: Snoop Rates</span>
          <br /> <span> Your Favorite Recipes</span>
        </h1>
      </div>
    </>
  );
};

export default ExplorePage;
