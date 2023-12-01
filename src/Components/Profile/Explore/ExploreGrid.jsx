import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ExploreGrid = ({ filtered }) => {
  let recipeList = filtered.map((recipe) => {
    console.log(recipe);
    return (
      <Link
        to={`/recipe/${recipe.recipeId}`}
        className="recipe-square"
        key={recipe.recipeId}
      >
        <h1 className="grid-title">
          {recipe.recipeName ?? recipe.recipe.recipeName}
        </h1>
        <img className="grid-image" src={recipe.image ?? recipe.recipe.image} />
      </Link>
    );
  });
  return (
    <div className="recipe-grid" style={{ marginTop: "15vh" }}>
      {recipeList}
      <Outlet />
    </div>
  );
};

export default ExploreGrid;
