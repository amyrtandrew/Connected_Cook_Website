import React from 'react'
import Name from './Name'
import Category from './Category'
import PrepTime from './PrepTime'
import CookTime from './CookTime'
import Servings from './Servings'
import Instructions from './Instructions'
import Ingredients from './Ingredients'
import Notes from './Notes'
import { useState } from 'react'

const Form = ({ initialData, initialIsEditing }) => {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [name, setName] = useState(initialData.name);
  const [category, setCategory] = useState(initialData.category);
  const [prepTime, setPrepTime] = useState(initialData.prepTime);
  const [cookTime, setCookTime] = useState(initialData.cookTime);
  const [servings, setServings] = useState(initialData.servings);
  const [ingredients, setIngredients] = useState(initialData.ingredients);
  const [instructions, setInstructions] = useState(initialData.instructions);
  const [notes, setNotes] = useState(initialData.notes);

// const { name, category, prepTime, cookTime, servings, ingredients, instructions, notes} = initialData
  return (
      <div>
        <Name isEditing={initialIsEditing} value={name}/>
        <Category isEditing={initialIsEditing} value={category}/>
        <PrepTime isEditing={initialIsEditing} value={prepTime}/>
        <CookTime isEditing={initialIsEditing} value={cookTime}/>
        <Servings isEditing={true} value={servings}/>
        <Instructions isEditing={initialIsEditing} value={instructions}/>
        <Ingredients isEditing={initialIsEditing} value={ingredients}/>
        <Notes isEditing={initialIsEditing} value={notes}/>
      </div>
  )
}

export default Form