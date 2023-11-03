import React from "react";
import Name from "./Name";
import Category from "./Category";
import PrepTime from "./PrepTime";
import CookTime from "./CookTime";
import Servings from "./Servings";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import Notes from "./Notes";
import { useState } from "react";
import ModeButtons from "./ModeButtons";
import PlusButton from "./PlusButton";
import axios from "axios";

const Form = ({ initialData, initialIsEditing, onDeleteRecipe, id }) => {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [name, setName] = useState(initialData.name);
  const [category, setCategory] = useState(initialData.category);
  const [prepTime, setPrepTime] = useState(initialData.prepTime);
  const [cookTime, setCookTime] = useState(initialData.cookTime);
  const [servings, setServings] = useState(initialData.servings);
  const [ingredients, setIngredients] = useState(initialData.ingredients);
  const [instructions, setInstructions] = useState(initialData.instructions);
  const [notes, setNotes] = useState(initialData.notes);

  const setEditMode = () => setIsEditing(true);

  const setNormalMode = async () => {
    let bodyObj = {
      name: name,
      category: category,
      prepTime: prepTime,
      cookTime: cookTime,
      servings: servings,
      ingredients: ingredients,
      instructions: instructions,
      notes: notes,
    };
    const response = await axios.put("/api/recipe", bodyObj);
    if (!response.data.error) {
      setIsEditing(false);
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div className="recipe-form">
      <Name isEditing={isEditing} value={name} onValueChange={setName} />
      <Category
        isEditing={isEditing}
        value={category}
        onValueChange={setCategory}
      />
      <PrepTime
        isEditing={isEditing}
        value={prepTime}
        onValueChange={setPrepTime}
      />
      <CookTime
        isEditing={isEditing}
        value={cookTime}
        onValueChange={setCookTime}
      />
      <Servings
        isEditing={isEditing}
        value={servings}
        onValueChange={setServings}
      />
      <Instructions
        isEditing={isEditing}
        value={instructions}
        onValueChange={setInstructions}
      />
      <Ingredients
        isEditing={isEditing}
        value={ingredients}
        onValueChange={setIngredients}
      />
      <Notes isEditing={isEditing} value={notes} onValueChange={setNotes} />
      <ModeButtons
        isEditing={isEditing}
        onEditClick={setEditMode}
        onSaveClick={setNormalMode}
        onDeleteClick={onDeleteRecipe}
      />
    </div>
  );
};

export default Form;
