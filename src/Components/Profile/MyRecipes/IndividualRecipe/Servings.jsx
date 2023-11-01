import React from "react";

const Servings = ({ value, isEditing, onValueChange }) => {
  return isEditing ? (
    <div>
      <label htmlFor="servings">Servings:</label>
      <input
        id="servings"
        className="row"
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  ) : (
    <div>{value}</div>
  );
};

export default Servings;
