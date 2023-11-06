import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import SingleRecipe from "../Components/Profile/MyRecipes/SingleRecipe/SingleRecipe";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const [editMode, setEditMode] = useState(null);
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");
  const { id } = useParams("");

  //   const {
  //     recipe: { recipeName, servings, instructions, prepTime, cookTime, notes },
  //   } = useLoaderData();
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
        </div>
      )}
    </>
  );
}
