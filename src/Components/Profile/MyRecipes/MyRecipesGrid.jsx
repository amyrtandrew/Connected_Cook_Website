import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MyRecipesGrid = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [myFavRecipes, setMyFavRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/my-recipes")
      .then((res) => {
        // setRecipes(res.data);
        let { data } = res;
        setMyRecipes(data.myRecipes);
        // setMyFavRecipes(res.data.myFavRecipes)
      })
      .catch((err) => console.log(err));
    axios.get("/api/my-favrecipes").then((res) => {
      // setRecipes(res.data);
      // setMyRecipes(res.data.myRecipes)
      setMyFavRecipes(res.data.favRecipes);
    });
  }, []);

  // Do this, but one for myRecipes array, and myFavRecipes array
  let recipeList = myRecipes.map((recipe) => {
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

  let favRecipeList = myFavRecipes.map((recipe) => {
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
        <h1>My Recipes</h1>
        {recipeList}
        <h1>My favorite recipes</h1>
        {favRecipeList}
        <Outlet />
      </div>
    </div>
  );
};

export default MyRecipesGrid;
