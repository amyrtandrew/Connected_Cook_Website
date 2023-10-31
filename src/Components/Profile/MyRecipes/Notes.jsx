import React from 'react'

const Notes = ({value, isEditing }) => {
  return isEditing ? (
    <div>
    <label htmlFor='notes'>Notes:</label>
    <input
      id='notes'
      className='row'
      type='text'
      value={value}
    />
  </div>
  ) : (
    <div>{value}</div>
  )
}

export default Notes