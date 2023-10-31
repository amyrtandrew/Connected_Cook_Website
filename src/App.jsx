import { useState } from 'react'
import './App.css'
import Profile from './Components/Profile/Profile'
import NavBar from './Components/NavBar/NavBar'
import IndividualRecipe from './Components/Profile/Explore/IndividualRecipe'
import RecipeGrid from './Components/Profile/MyRecipes/HomeGrid'

function App() {

  const recipes = [
    { id: 1, name: 'Recipe 1' },
    { id: 2, name: 'Recipe 2' },
    { id: 3, name: 'Recipe 3' },
    { id: 4, name: 'Recipe 4' },
    { id: 5, name: 'Recipe 5' },
    { id: 6, name: 'Recipe 6' },
    { id: 7, name: 'Recipe 7' },
    { id: 8, name: 'Recipe 8' },
    { id: 9, name: 'Recipe 9' },
    // Add more recipe objects as needed
  ];

  return (
    <div>
      <NavBar />
      <RecipeGrid recipes={recipes} />
    </div>
  );
}

export default App
