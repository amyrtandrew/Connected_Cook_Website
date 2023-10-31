import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const IndividualRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    category: 'appetizer',
    prepTime: '',
    cookTime: '',
    servings: '',
    ingredients: '',
    instructions: '',
    notes: '',
    image: null, // Initialize the image property
  });
  const [editingRecipeId, setEditingRecipeId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecipe.name.trim() === '') {
      return; // Don't add empty recipes
    }

    // Handle the image upload if an image is selected
    if (newRecipe.image) {
      const formData = new FormData();
      formData.append('image', newRecipe.image);
      // You can handle the formData as needed, e.g., send it to the server
    }

    // Handle the rest of the recipe data as usual
    const updatedRecipes = editingRecipeId
      ? recipes.map((recipe) =>
          recipe.id === editingRecipeId ? { ...newRecipe, id: editingRecipeId } : recipe
        )
      : [...recipes, { ...newRecipe, id: Date.now() }];

    saveRecipes(updatedRecipes);

    setNewRecipe({
      name: '',
      category: 'appetizer',
      prepTime: '',
      cookTime: '',
      servings: '',
      ingredients: '',
      instructions: '',
      notes: '',
      image: null, // Clear the image after submission
    });
    setEditingRecipeId(null);
  };

  useEffect(() => {
    // Load recipes from local storage on component mount (if available)
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  // Function to save recipes to local storage and update state
  const saveRecipes = (updatedRecipes) => {
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };

  const addRecipe = () => {
    if (newRecipe.name.trim() === '') {
      return; // Don't add empty recipes
    }
    const updatedRecipes = [...recipes, { ...newRecipe, id: Date.now() }];
    saveRecipes(updatedRecipes);
    setNewRecipe({
      name: '',
      category: 'appetizer',
      prepTime: '',
      cookTime: '',
      servings: '',
      ingredients: '',
      instructions: '',
      notes: '',
      image: null, // Clear the image after submission
    });
  };

  const updateRecipe = () => {
    if (editingRecipeId === null) {
      addRecipe();
      return;
    }
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === editingRecipeId ? { ...newRecipe, id: editingRecipeId } : recipe
    );
    saveRecipes(updatedRecipes);
    setNewRecipe({
      name: '',
      category: 'appetizer',
      prepTime: '',
      cookTime: '',
      servings: '',
      ingredients: '',
      instructions: '',
      notes: '',
      image: null, // Clear the image after submission
    });
    setEditingRecipeId(null);
  };

  const editRecipe = (recipe) => {
    setNewRecipe({ ...recipe });
    setEditingRecipeId(recipe.id);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    saveRecipes(updatedRecipes);
  };

  return (
    <div className='container'>
      <div>
        <label htmlFor='recipe-name'>Recipe Name:</label>
        <input
          id='recipe-name'
          className='row'
          type='text'
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='category'>Category: </label>
        <select
          id='category'
          value={newRecipe.category}
          onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
        >
          <option value='appetizer'>appetizer</option>
          <option value='breakfast'>breakfast</option>
          <option value='lunch'>lunch</option>
          <option value='dinner'>dinner</option>
          <option value='dessert'>dessert</option>
          <option value='other'>other</option>
        </select>
      </div>
      <div>
        <label htmlFor='prep-time'>Prep Time (min):</label>
        <input
          id='prep-time'
          className='row'
          type='text'
          value={newRecipe.prepTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='cook-time'>Cook Time (min):</label>
        <input
          id='cook-time'
          className='row'
          type='text'
          value={newRecipe.cookTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='servings'>Servings:</label>
        <input
          id='servings'
          className='row'
          type='text'
          value={newRecipe.servings}
          onChange={(e) => setNewRecipe({ ...newRecipe, servings: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='ingredients'>Ingredients/Amounts:</label>
        <input
          id='ingredients'
          className='row'
          type='text'
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='instructions'>Instructions:</label>
        <input
          id='instructions'
          className='row'
          type='text'
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='notes'>Notes:</label>
        <input
          id='notes'
          className='row'
          type='text'
          value={newRecipe.notes}
          onChange={(e) => setNewRecipe({ ...newRecipe, notes: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='image'>Image:</label>
        <input
          type='file'
          id='image'
          accept='image/*'
          onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.files[0] })}
        />
      </div>
      <div>
        <Button variant='primary' onClick={updateRecipe}>
          {editingRecipeId === null ? 'Add Recipe' : 'Update Recipe'}
        </Button>
      </div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div>
              <h2>{recipe.name}</h2>
              <p>Category: {recipe.category}</p>
              <p>Prep Time: {recipe.prepTime}</p>
              <p>Cook Time: {recipe.cookTime}</p>
              <p>Servings: {recipe.servings}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>Notes: {recipe.notes}</p>
              <Button variant='warning' onClick={() => editRecipe(recipe)}>
                Edit
              </Button>
              <Button variant='danger' onClick={() => deleteRecipe(recipe.id)}>
                Delete
              </Button>
            </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualRecipe;

