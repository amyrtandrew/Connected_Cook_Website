import axios from "axios";
import { useLoaderData, useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams("");

  const navigate = useNavigate();

  const loadRecipe = async () => {
    const response = await axios.get(`/api/recipe/${id}`);
    setRecipe(response.data);
  };

  useEffect(() => {
    loadRecipe();
  }, []);
  console.log(recipe);

  return (
    <>
      {recipe && (
        <div>
          <h1>{recipe.recipeName}</h1>
          <ul>
            <li>{recipe.servings}</li>
            <li>{recipe.instructions}</li>
            <li>{recipe.prepTime}</li>
            <li>{recipe.cookTime}</li>
            <li>{recipe.notes}</li>
          </ul>
          <Link to={`/edit-recipe/${recipe.recipeId}`}>
            <button>Edit</button>
          </Link>
        </div>
      )}
    </>
  );
}
