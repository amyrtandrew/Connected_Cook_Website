import React from "react";

const Instructions = ({ value, isEditing, onValueChange }) => {
  return isEditing ? (
    <div>
      <label htmlFor="instructions">Instructions:</label>
      <input
        id="instructions"
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

export default Instructions;
