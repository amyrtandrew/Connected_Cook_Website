import React from 'react'

const PrepTime = ({ value, isEditing }) => {
  return isEditing ? (
    <div>
        <label htmlFor='prep-time'>Prep Time (min):</label>
        <input
          id='prep-time'
          className='row'
          type='text'
          value={value}
        />
      </div>
  ) : (
    <div>{value}</div>
  )
}

export default PrepTime