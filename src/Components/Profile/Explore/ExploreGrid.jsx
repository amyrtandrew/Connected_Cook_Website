import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ExploreGrid = ({ filtered }) => {
  let recipeList = filtered.map((recipe) => {
    return (
      <Link
        to={`/recipe/${recipe.recipeId}`}
        className="recipe-square"
        key={recipe.recipeId}
      >
        {recipe.recipeName}
        {/* <img id="recipe-image" src={recipe.image} /> */}
      </Link>
    );
  });

  return (
    <div className="recipe-grid">
      {recipeList}
      <Outlet />
    </div>
  );
};

export default ExploreGrid;
