import React from 'react'

const CookTime = ({ value, isEditing }) => {
  return isEditing ? (
    <div>
    <label htmlFor='cook-time'>Cook Time (min):</label>
    <input
      id='cook-time'
      className='row'
      type='text'
      value={value}
    />
  </div>
  ) : (
    <div>{value}</div>
  )
}

export default CookTime