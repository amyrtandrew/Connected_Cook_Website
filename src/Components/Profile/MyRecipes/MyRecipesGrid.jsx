import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";

const MyRecipesGrid = ({
  recipeList,
  favRecipeList,
  allRecipes,
  sorted,
  alphaList,
}) => {
  return (
    <div className="recipe-grid">
      {alphaList}
      {/* {sorted ? favRecipeList : allRecipes} */}
      {/* <h1>All Recipes</h1>
      {res} */}
      {/* {recipeList}
        {favRecipeList} */}
      {/* {allRecipes} */}
      {/* <h1>My favorite recipes</h1> */}
      {/* {favRecipeList} */}
      <Outlet />
    </div>
  );
};

export default MyRecipesGrid;
