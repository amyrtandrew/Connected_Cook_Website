import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import ModeButtons from './ModeButtons';
import Form from './Form';

const SingleRecipe = ({ initialRecipeList }) => {
    const [recipeList, setRecipeList] = useState(initialRecipeList)
    const rows = initialRecipeList.map((recipeItem) => {
        const { id, name, category, prepTime, cookTime, servings, ingredients, instructions, notes } = recipeItem
      
  return (
    <div>
        <Form 
        key={id}
        initialData={{ name, category, prepTime, cookTime, servings, ingredients, instructions, notes}}
        initialIsEditing={false}
        />
  </div>
);
})
return (
    <div>{rows}</div>
)
}

export default SingleRecipe