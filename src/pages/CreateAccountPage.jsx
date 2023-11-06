import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ExploreHeader from "../Components/Profile/Explore/Header/ExploreHeader";
import RecipeGrid from "../Components/Profile/MyRecipes/RecipeGrid";
import { Outlet } from "react-router";
import LoginForm from "../Components/Login/LoginForm";

class NavBar extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Outlet />
      </div>
    );
  }
}

export default NavBar;
