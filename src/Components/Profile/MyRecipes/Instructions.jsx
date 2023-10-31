import React from 'react'

const Instructions = ({value, isEditing }) => {
  return isEditing ? (
    <div>
    <label htmlFor='instructions'>Instructions:</label>
    <input
      id='instructions'
      className='row'
      type='text'
      value={value}
    />
  </div>
  ) : (
    <div>{value}</div>
  )
}

export default Instructions