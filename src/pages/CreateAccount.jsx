import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ExploreHeader from "../Components/Profile/Explore/Header/ExploreHeader";
import RecipeGrid from "../Components/Profile/MyRecipes/RecipeGrid";
import { Outlet } from "react-router";
import Login from "../Components/Login/Login";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Login />
        <Outlet />
      </div>
    );
  }
}

export default NavBar;
