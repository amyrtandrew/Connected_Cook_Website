import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import RecipeGrid from "../Components/Profile/Explore/ExploreGrid";
import { Outlet } from "react-router";

class MyRecipesPage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar />
        <Outlet />
      </div>
    );
  }
}

export default MyRecipesPage;
