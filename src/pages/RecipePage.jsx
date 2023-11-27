import axios from "axios";
import { useLoaderData, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams("");
  // const [like, setLike] = useState(50);
  const [fav, setFav] = useState(false);
  const [comment, setComment] = useState("");

  let userId = useSelector((state) => state.userId);
  // console.log(userId);

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
      console.log("favorited");
      console.log(recipe.favorites.length);

      // setLike(like + 1);

      setFav(true);
    }
  };

  const handleUnfavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log("unfavorite hit");
    const res = await axios.post(`/api/unfavorite/${recipeId}`);
    if (res.data.success) {
      console.log("unfavorited");
      console.log(recipe.favorites.length);
      // setLike(like - 1);
    }
    setFav(false);
  };

  return (
    <>
      {recipe && (
        <div>
          <h1>{recipe.recipeName}</h1>
          <ul className="recipe-info">
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
            <div>
              <button
                className="unfilled-star"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-star unfilled-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>{" "}
              </button>
              <p className="favorite-count">{recipe.favorites.length}</p>
              {/* <label htmlFor="comment">Comment:</label>
              <input
                name="comment"
                id="comment"
                type="text"
                placeholder="Add comment here"
                onChange={(e) => setComment(e.target.value)}
              /> */}
            </div>
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
