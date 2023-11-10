import axios from "axios";
import { useLoaderData, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { Image } from "react-bootstrap";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams("");

  const loadRecipe = async () => {
    const response = await axios.get(`/api/recipe/${id}`);
    setRecipe(response.data);
  };

  useEffect(() => {
    loadRecipe();
  }, []);
  // console.log(recipe.image);

  return (
    <>
      {recipe && (
        <div>
          <h1>{recipe.recipeName}</h1>
          <ul>
            <li>{recipe.category}</li>
            <li>{recipe.servings}</li>
            <li>{recipe.instructions}</li>
            <li>{recipe.prepTime}</li>
            <li>{recipe.cookTime}</li>
            <li>{recipe.notes}</li>
            {/* <li> */}
            {/* <Image src={recipe.image}></Image> */}
            {/* <img src={recipe.image} /> */}
            {/* </li> */}
          </ul>
          <Link to={`/edit-recipe/${recipe.recipeId}`}>
            <button>Edit</button>
          </Link>
          <Link to="/my-recipes">
            <button>Back to Recipes</button>
          </Link>
        </div>
      )}
    </>
  );
}
