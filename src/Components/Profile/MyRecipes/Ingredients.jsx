import React from 'react'

const Ingredients = () => {
  return (
    <div>
        <label htmlFor='ingredients'>Ingredients/Amounts:</label>
        <input
          id='ingredients'
          className='row'
          type='text'
        />
      </div>
  )
}

export default Ingredients