import { useState } from "react";
import { Link } from "react-router-dom";

const CreateRecipeForm = ({ onCreateRecipe }) => {
  const [recipeName, setRecipeName] = useState("");
  //   const [category, setCategory] = useState('');
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  //   const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState("");

  return (
    <div>
      <form
        className="create-recipe-form"
        onSubmit={(e) => {
          onCreateRecipe(e, {
            recipeName: recipeName,
            servings: servings,
            // category: category,
            instructions: instructions,
            prepTime: prepTime,
            cookTime: cookTime,
            notes: notes,
            image: image,
          });
        }}
      >
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          name="recipeName"
          id="recipeName"
          type="text"
          required
          onChange={(e) => setRecipeName(e.target.value)}
        />

        <label htmlFor="servings">Servings:</label>
        <input
          name="servings"
          id="servings"
          type="text"
          onChange={(e) => setServings(e.target.value)}
        />
        <label htmlFor="instructions">Instructions:</label>
        <input
          name="instructions"
          id="instructions"
          type="text"
          required
          onChange={(e) => setInstructions(e.target.value)}
        />
        <label htmlFor="prepTime">Prep Time:</label>
        <input
          name="prepTime"
          id="prepTime"
          type="text"
          onChange={(e) => setPrepTime(e.target.value)}
        />
        <label htmlFor="cookTime">Cook Time:</label>
        <input
          name="cookTime"
          id="cookTime"
          type="text"
          onChange={(e) => setCookTime(e.target.value)}
        />
        <label htmlFor="notes">Notes:</label>
        <input
          name="notes"
          id="notes"
          type="text"
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
        <input
          name="image"
          id="image"
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files)}
        />
      </form>
      <div className="home-link">
        <Link to="/my-recipes">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateRecipeForm;
