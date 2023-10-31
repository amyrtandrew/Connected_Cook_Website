import React from 'react';


const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div className="recipe-square" key={recipe.id}>
          {recipe.name}
          <img id='recipe-image' src={recipe.image} />
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;