import React from "react";

const CookTime = ({ value, isEditing, onValueChange }) => {
  return isEditing ? (
    <div>
      <label htmlFor="cook-time">Cook Time (min):</label>
      <input
        id="cook-time"
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

export default CookTime;
