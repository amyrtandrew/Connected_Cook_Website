import React from 'react'
import Name from './Name'
import Category from './Category'
import PrepTime from './PrepTime'
import CookTime from './CookTime'
import Servings from './Servings'
import Instructions from './Instructions'
import Ingredients from './Ingredients'
import Notes from './Notes'

const Form = () => {

  return (
      <div>
        <Name />
        <Category />
        <PrepTime />
        <CookTime />
        <Servings />
        <Instructions />
        <Ingredients />
        <Notes />
      </div>
  )
}

export default Form