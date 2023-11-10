import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MyRecipesGrid = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/my-recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let recipeList = recipes.map((recipe) => {
    return (
      <Link
        to={`/recipe/${recipe.recipeId}`}
        className="recipe-square"
        key={recipe.recipeId}
      >
        {recipe.recipeName}
        <img id="recipe-image" src={recipe.image} />
      </Link>
    );
  });

  return (
    <div>
      <nav className="grid-navbar">
        <NavLink to="/create-recipe" href="#">
          <button className="plus-button">+</button>
        </NavLink>
      </nav>

      <div className="recipe-grid">
        {recipeList}
        <Outlet />
      </div>
    </div>
  );
};

export default MyRecipesGrid;
