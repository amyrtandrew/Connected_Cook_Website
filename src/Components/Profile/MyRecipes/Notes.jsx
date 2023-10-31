import React from 'react'

const Notes = () => {
  return (
    <div>
    <label htmlFor='notes'>Notes:</label>
    <input
      id='notes'
      className='row'
      type='text'
    />
  </div>
  )
}

export default Notes