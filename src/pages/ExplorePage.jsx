import React from "react";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import ExploreGrid from "../Components/Profile/Explore/ExploreGrid";
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
  const [selectedCook, setSelectedCook] = useState(null);
  const [selectedPop, setSelectedPop] = useState(null);

  useEffect(() => {
    axios
      .get("/api/all-recipes")
      .then(({ data }) => {
        setData(data);
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterFunc = (e) => {
    e.preventDefault();

    let filteredData = [...data];
    setSubmitted(true);
    if (timeFilter) {
      filteredData = filteredData.filter((i) => i.cookTime < 30);
    }
    if (nameFilter) {
      filteredData = filteredData.filter((i) =>
        i.recipeName.toLowerCase().includes(input)
      );
    }
    if (appFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 1);
    }
    if (bfastFilter) {
      filteredData = filteredData.filter((i) => i.categoryId === 2);
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
  };

  const filterCookTime = (e) => {
    e.preventDefault();
    setTimeFilter(true);
    setSelectedCook("cookTime");
  };

  const filterName = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setNameFilter(true);
  };

  const filterCategory = (e) => {
    e.preventDefault();

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
    setSelectedPop("popular");
  };

  return (
    <>
      <NavBar />
      <div className="flexbox-container home-page">
        <ExploreHeader
          filterName={filterName}
          filterCookTime={filterCookTime}
          filterCategory={filterCategory}
          filterPopular={filterPopular}
          filterFunc={filterFunc}
          selectedCook={selectedCook}
          selectedPop={selectedPop}
        />
        {submitted ? <ExploreGrid filtered={filterData} /> : <PhotoSlide />}
      </div>
    </>
  );
};

export default ExplorePage;
