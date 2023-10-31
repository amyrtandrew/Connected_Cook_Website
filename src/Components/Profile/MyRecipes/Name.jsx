import React from 'react'

const Name = ({ value, isEditing }) => {
  return isEditing ? (
    <div className='container'>
        <label htmlFor='recipe-name'>Recipe Name:</label>
        <input
          id='recipe-name'
          type='text'
          value={value}
        />
      </div>
  ) : (
    <div>Name: {value}</div>
  )
}

export default Name