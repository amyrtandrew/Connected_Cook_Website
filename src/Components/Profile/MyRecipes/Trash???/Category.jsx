import React from "react";

const Category = ({ value, isEditing, onValueChange }) => {
  return isEditing ? (
    <div>
      <label htmlFor="category">Category: </label>
      <select
        id="category"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        <option value="">Select</option>
        <option value="appetizer">appetizer</option>
        <option value="breakfast">breakfast</option>
        <option value="lunch">lunch</option>
        <option value="dinner">dinner</option>
        <option value="dessert">dessert</option>
        <option value="other">other</option>
      </select>
    </div>
  ) : (
    <div>{value}</div>
  );
};

export default Category;
