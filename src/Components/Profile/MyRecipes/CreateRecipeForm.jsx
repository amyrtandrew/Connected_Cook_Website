import { useState } from "react";
import { Link } from "react-router-dom";

const CreateRecipeForm = ({ onCreateRecipe }) => {
  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        marginTop: "25vh",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "9px",
        height: "80vh",
        width: "30vw",
        backgroundColor: "rgb(255 255 255 / 50%)",
      }}
    >
      <form
        className="create-recipe-form"
        style={{ width: "100%" }}
        onSubmit={(e) => {
          onCreateRecipe(e, {
            recipeName: recipeName,
            servings: servings,
            category: category,
            ingredients: ingredients,
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
          placeholder="name of recipe"
          required
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="1">Appetizer</option>
          <option value="2">Breakfast</option>
          <option value="3">Lunch</option>
          <option value="4">Dinner</option>
          <option value="5">Dessert</option>
          <option value="6">Other</option>
        </select>
        <label htmlFor="servings">Servings:</label>
        <input
          name="servings"
          id="servings"
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="# servings"
          onChange={(e) => setServings(e.target.value)}
        />
        <label htmlFor="ingredients">Ingredients/Amounts:</label>
        <input
          name="ingredients"
          id="ingredients"
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="ingredients"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label htmlFor="instructions">Instructions:</label>
        <input
          name="instructions"
          id="instructions"
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="instructions"
          onChange={(e) => setInstructions(e.target.value)}
        />
        <label htmlFor="prepTime">Prep Time:</label>
        <input
          name="prepTime"
          id="prepTime"
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="prep time (min)"
          onChange={(e) => setPrepTime(e.target.value)}
        />
        <label htmlFor="cookTime">Cook Time:</label>
        <input
          name="cookTime"
          id="cookTime"
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="cook time (min)"
          onChange={(e) => setCookTime(e.target.value)}
        />
        <label htmlFor="notes">Notes:</label>
        <input
          name="notes"
          id="notes"
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="notes"
          onChange={(e) => setNotes(e.target.value)}
        />
        <label htmlFor="image">Image URL:</label>
        {/* <input
          name="image"
          id="image"
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
        <input
          name="image"
          id="image"
          required
          type="text"
          style={{
            borderRadius: "10px",
            width: "18vw",
            backgroundColor: "rgb(255 255 255 / 70%)",
          }}
          placeholder="URL here"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
        <div className="home-link">
          <Link to="/my-recipes">
            <button style={{ backgroundColor: "blue", color: "black" }}>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
