import React from 'react';
import { Link } from 'react-router-dom'


const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div className="recipe-square" key={recipe.id}>
          <Link to='/IndividualRecipe'>
          {recipe.name}
          <img id='recipe-image' src={recipe.image} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;