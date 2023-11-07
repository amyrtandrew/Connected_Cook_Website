import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import CreateAccountForm from "../Components/Login/CreateAccountForm";
import { Link } from "react-router-dom";
import SingleRecipe from "../Components/Profile/MyRecipes/SingleRecipe/SingleRecipe";
import CreateRecipeForm from "../Components/Profile/MyRecipes/CreateRecipeForm";

const CreateRecipePage = () => {
  const navigate = useNavigate();

  const handleCreateRecipe = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/create-recipe", formData);

    if (res.data.success) {
      navigate("/");
    }
  };

  return (
    <div className="create-recipe-page">
      <CreateRecipeForm onCreateRecipe={handleCreateRecipe} />
    </div>
  );
};

export default CreateRecipePage;
