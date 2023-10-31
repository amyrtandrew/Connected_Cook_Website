import React from 'react'

const Ingredients = ({value, isEditing }) => {
  return isEditing ? (
    <div>
        <label htmlFor='ingredients'>Ingredients/Amounts:</label>
        <input
          id='ingredients'
          className='row'
          type='text'
          value={value}
        />
      </div>
  ) : (
    <div>{value}</div>
  )
}

export default Ingredients