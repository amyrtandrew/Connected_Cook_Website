import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import ModeButtons from "./ModeButtons";
import Form from "./Form";
import idGenerator from "./idGenerator";
import PlusButton from "./PlusButton";
import axios from "axios";

// let globalId = 3
const SingleRecipe = ({ initialData }) => {
  const [recipeList, setRecipeList] = useState(initialData);
  const rows = recipeList.map((recipeInfo) => {
    const {
      id,
      name,
      category,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
    } = recipeInfo;
    const isEditing = recipeInfo.isEditing;

    return (
      <div className="form">
        <Form
          key={id}
          id={id}
          initialData={{
            name,
            category,
            prepTime,
            cookTime,
            servings,
            ingredients,
            instructions,
            notes,
          }}
          initialIsEditing={isEditing}
          onDeleteRecipe={() => deleteRecipe(id)}
        />
      </div>
    );
  });

  const addRecipe = async () => {
    const response = await axios.post("/addRecipe", { name: "name of recipe" });

    setRecipeList([...recipeList, response.data]);
  };

  const deleteRecipe = async (itemId) => {
    const response = await axios.delete(`/deleteRecipe/${itemId}`);
    if (!response.data.error) {
      const filteredRecipe = recipeList.filter(
        (recipeInfo) => recipeInfo.id !== itemId
      );
      setRecipeList(filteredRecipe);
    }
  };

  return (
    <div>
      <PlusButton key="plus-button" onClick={addRecipe} />
      {rows}
    </div>
  );
};

export default SingleRecipe;
