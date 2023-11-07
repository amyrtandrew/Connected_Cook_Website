import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ExploreHeader from "../Components/Profile/Explore/Header/ExploreHeader";
import RecipeGrid from "../Components/Profile/MyRecipes/RecipeGrid";
import { Outlet } from "react-router";

class HomePage extends Component {
  render() {
    return (
      <div className='home-page'>
        <NavBar />
        <RecipeGrid />
        <Outlet />
      </div>
    );
  }
}

export default HomePage;
