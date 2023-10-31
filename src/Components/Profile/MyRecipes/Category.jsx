import React from 'react'

const Category = ({ value, isEditing } ) => {
  return isEditing ? (
    <div>
        <label htmlFor='category'>Category: </label>
        <select
          id='category'
          value={value}
        >
          <option value='appetizer'>appetizer</option>
          <option value='breakfast'>breakfast</option>
          <option value='lunch'>lunch</option>
          <option value='dinner'>dinner</option>
          <option value='dessert'>dessert</option>
          <option value='other'>other</option>
        </select>
      </div>
  ) : (
    <div>{value}</div>
  )
}

export default Category