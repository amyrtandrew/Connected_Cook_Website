import { useState } from "react";
import "./App.css";
import Profile from "./Components/Profile/MyRecipes/IndividualRecipe/Profile";
import NavBar from "./Components/NavBar/NavBar";
import RecipeGrid from "./Components/Profile/MyRecipes/RecipeGrid";
import { Link, Outlet } from "react-router-dom";
import ExploreHeader from "./Components/Profile/Explore/Header/ExploreHeader";
import { Nav } from "react-bootstrap";
import SingleRecipe from "./Components/Profile/MyRecipes/IndividualRecipe/SingleRecipe";
import MyRecipes from "./pages/MyRecipes";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      {/* <SingleRecipe initialRecipeList={TEST_DATA}/> */}
      {/* <NavBar />
      <Link to='/navbar'>navbar</Link>
      {/* <RecipeGrid recipes={recipes}/> */}
      {/* <MyRecipes /> */}
      <NavBar />
      <Outlet />
      {/* <SingleRecipe /> */}
      {/* <SingleRecipe /> */}
      {/* <SingleRecipe /> */}
    </div>
  );
}

export default App;
