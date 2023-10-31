import React from 'react';


const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div className="recipe-square" key={recipe.id}>
          {recipe.name}
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;