import React from 'react'

const Servings = ({value, isEditing }) => {
  return isEditing ? (
    <div>
        <label htmlFor='servings'>Servings:</label>
        <input
          id='servings'
          className='row'
          type='text'
          value={value}
        />
      </div>
  ) : (
    <div>{value}</div>
  )
}

export default Servings