import React from 'react'

const Image = () => {
  return (
    <div>
    <label htmlFor='image'>Image:</label>
    <input
      type='file'
      id='image'
      accept='image/*'
    />
  </div>
  )
}

export default Image