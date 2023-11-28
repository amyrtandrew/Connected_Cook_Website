import NavBar from "../Components/NavBar/NavBar";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import RecipeGrid from "../Components/Profile/Explore/ExploreGrid";
import { Outlet } from "react-router";
import MyRecipesGrid from "../Components/Profile/MyRecipes/MyRecipesGrid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import MyRecipesHeader from "../Components/Profile/MyRecipes/MyRecipesHeader";

function MyRecipesPage() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [myFavRecipes, setMyFavRecipes] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [auto, setAuto] = useState(false);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/my-recipes")
      .then((res) => {
        let { data } = res;
        setMyRecipes(data.myRecipes);
      })
      .catch((err) => console.log(err));
    axios.get("/api/my-favrecipes").then((res) => {
      setMyFavRecipes(res.data.favRecipes);
    });
  }, []);

  let allRecipes = myRecipes.concat(myFavRecipes);

  myRecipes.sort((a, b) => a.recipeName.localeCompare(b.recipeName));

  useEffect(
    () => {
      let filteredData;
      if (favorite) {
        filteredData = myFavRecipes;
      } else if (alphabetical) {
        filteredData = allRecipes;
      } else if (auto) {
        filteredData = myRecipes;
      }
      setRecipeData(filteredData);
    },
    [auto, favorite, alphabetical],
    myFavRecipes,
    allRecipes,
    myRecipes
  );

  const changeCat = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setAuto(selectedValue === "personal");
    setFavorite(selectedValue === "favorites");
    setAlphabetical(selectedValue === "alphabetical");
    console.log(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="home-page">
        <MyRecipesHeader changeCat={changeCat} />
        <MyRecipesGrid allRecipes={allRecipes} recipeData={recipeData} />
        <Outlet />
      </div>
    </>
  );
}
export default MyRecipesPage;
