import axios from "axios";
import { useLoaderData, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { Image } from "react-bootstrap";

export default function RecipePage({ personal }) {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams("");
  const [like, setLike] = useState(50);
  // const [dislike, setDislike] = useState(3);
  // const [likeActive, setLikeActive] = useState(false);
  // const [dislikeActive, setDislikeActive] = useState(false);
  const [fav, setFav] = useState(false);

  // function likef() {
  // if (dislikeActive) {
  //   setDisklikeActive(false);
  //   setLike(like + 1);
  //   setDislike(dislike - 1);
  // }
  // }
  // }

  // function dislikef() {
  //   if (dislikeActive) {
  //     setDislikeActive(false);
  //     setDislike(dislike - 1);
  //   } else {
  //     setDislikeActive(true);
  //     setDislike(dislike + 1);
  //     if (likeActive) {
  //       setLikeActive(false);
  //       setDislike(dislike + 1);
  //       setLike(like - 1);
  //     }
  //   }
  // }

  const loadRecipe = async () => {
    const response = await axios.get(`/api/recipe/${id}`);
    setRecipe(response.data);
  };

  useEffect(() => {
    loadRecipe();
  }, []);
  // console.log(recipe.image);
  // let favorited = true;

  const handleFavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log("favorite hit");
    // event.preventDefault();
    const res = await axios.post(`/api/favorite/${id}`);
    if (res.data.success) {
      console.log("favorited");

      setLike(like + 1);

      setFav(true);
    }
  };

  const handleUnfavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log("unfavorite hit");
    const res = await axios.post(`/api/unfavorite/${id}`);
    if (res.data.success) {
      console.log("unfavorited");
      setLike(like - 1);
    }
    setFav(false);
  };

  return (
    <>
      {recipe && (
        <div>
          <h1>{recipe.recipeName}</h1>
          <ul>
            <li>{recipe.category}</li>
            <li>Servings: {recipe.servings} people</li>
            <li>Instructions: {recipe.instructions}</li>
            <li>Prep Time: {recipe.prepTime} minutes</li>
            <li>Cook Time: {recipe.cookTime} minutes</li>
            <li>Total Time: {recipe.prepTime + recipe.cookTime} minutes</li>
            <li>Notes: {recipe.notes}</li>
            {/* <li> */}
            {/* <Image src={recipe.image}></Image> */}
            {/* <img src={recipe.image} /> */}
            {/* </li> */}
          </ul>
          <div>
            <Link to={`/edit-recipe/${recipe.recipeId}`}>
              <button>Edit</button>
            </Link>
            <Link to="/my-recipes">
              <button>Back to Recipes</button>
            </Link>
          </div>
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
            like {like}
          </button>
          {/* <button onClick={dislikef}>dislike {dislike}</button> */}
        </div>
      )}
    </>
  );
}
