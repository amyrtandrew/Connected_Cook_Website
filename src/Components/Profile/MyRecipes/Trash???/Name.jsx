import React from "react";

const Name = ({ value, isEditing, onValueChange }) => {
  return isEditing ? (
    <div className="container">
      <label htmlFor="recipe-name">Recipe Name:</label>
      <input
        id="recipe-name"
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  ) : (
    <div>Name: {value}</div>
  );
};

export default Name;
