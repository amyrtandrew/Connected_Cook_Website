import axios from "axios";
import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams("");
  // const [like, setLike] = useState(50);
  const [fav, setFav] = useState(false);

  let userId = useSelector((state) => state.userId);
  // console.log(userId);

  // const navigate = useNavigate();
  // const backButton = () => {
  //   navigate(-1);
  // };

  const loadRecipe = async () => {
    const { data } = await axios.get(`/api/recipe/${recipeId}`);
    for (let favorite of data.favorites) {
      if (favorite.userId === userId) {
        setFav(true);
      }
    }
    setRecipe(data);
    // console.log(recipe);
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  const handleFavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log("favorite hit");
    const res = await axios.post(`/api/favorite/${recipeId}`);
    if (res.data.success) {
      setFav(true);
      console.log("favorited");
      console.log(recipe.favorites.length);
      loadRecipe();

      // setLike(like + 1);
    }
  };

  const handleUnfavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log("unfavorite hit");
    const res = await axios.post(`/api/unfavorite/${recipeId}`);
    if (res.data.success) {
      setFav(false);
      console.log("unfavorited");
      console.log(recipe.favorites.length);
      loadRecipe();
      // setLike(like - 1);
    }
  };

  return (
    <>
      {recipe && (
        <div>
          <h1>{recipe.recipeName}</h1>
          <ul>
            <li>
              {/* {recipe.categoryId} */}Category:
              {recipe.categoryId === 1
                ? " Appetizer"
                : recipe.categoryId === 2
                ? " Breakfast"
                : recipe.categoryId === 3
                ? " Lunch"
                : recipe.categoryId === 4
                ? " Dinner"
                : recipe.categoryId === 5
                ? " Dessert"
                : " Other"}
            </li>
            <li>Servings: {recipe.servings} people</li>
            <li>Ingredients/Amounts: {recipe.ingredients}</li>
            <li>Instructions: {recipe.instructions}</li>
            <li>Prep Time: {recipe.prepTime} minutes</li>
            <li>Cook Time: {recipe.cookTime} minutes</li>
            <li>Total Time: {recipe.prepTime + recipe.cookTime} minutes</li>
            <li>Notes: {recipe.notes}</li>
            {/* <img src={recipe.image.data} alt="could not load" /> */}
            {/* <li> */}
            {/* <Image src={recipe.image}></Image> */}
            {/* <img src={recipe.image} /> */}
            {/* </li> */}
          </ul>
          {userId === recipe.userId ? (
            <Link to={`/edit-recipe/${recipe.recipeId}`}>
              <button>Edit</button>
            </Link>
          ) : (
            <button
              onClick={() => {
                console.log("hit button");
                if (!fav) {
                  handleFavorite();
                } else {
                  handleUnfavorite();
                }
              }}
            >
              {/* like {like} */}
              Favorites: {recipe.favorites.length}
            </button>
          )}
          <Link to="/my-recipes">
            <button>Back to Recipes</button>
          </Link>

          {/* <button onClick={dislikef}>dislike {dislike}</button> */}
        </div>
      )}
    </>
  );
}
