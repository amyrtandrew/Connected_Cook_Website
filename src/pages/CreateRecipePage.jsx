import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import CreateRecipeForm from "../Components/Profile/MyRecipes/CreateRecipeForm";

const CreateRecipePage = ({ recipeId }) => {
  const navigate = useNavigate();

  const handleCreateRecipe = async (event, formData) => {
    event.preventDefault();
    console.log(`the form data is ${formData}`);
    console.log(formData.category);
    const res = await axios.post("/api/create-recipe", formData);
    if (res.data.success) {
      //   navigate("/recipe-grid");
      navigate(`/recipe/${res.data.recipeId}`);
    }
  };

  return (
    <div className="create-recipe-page">
      <CreateRecipeForm onCreateRecipe={handleCreateRecipe} />
    </div>
  );
};

export default CreateRecipePage;
