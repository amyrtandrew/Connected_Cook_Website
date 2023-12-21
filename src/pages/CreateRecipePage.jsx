import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import CreateRecipeForm from "../Components/Profile/MyRecipes/CreateRecipeForm";
import NavBar from "../Components/NavBar/NavBar";

const CreateRecipePage = ({ recipeId }) => {
  const navigate = useNavigate();

  const handleCreateRecipe = async (event, formData) => {
    event.preventDefault();
    const res = await axios.post("/api/create-recipe", formData);
    if (res.data.success) {
      navigate(`/recipe/${res.data.recipeId}`);
    }
  };

  return (
    <>
      {" "}
      <NavBar />
      <div className="create-recipe-page">
        <CreateRecipeForm onCreateRecipe={handleCreateRecipe} />
      </div>
    </>
  );
};

export default CreateRecipePage;
