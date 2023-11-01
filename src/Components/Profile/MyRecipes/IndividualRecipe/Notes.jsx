import React from "react";

const Notes = ({ value, isEditing, onValueChange }) => {
  return isEditing ? (
    <div>
      <label htmlFor="notes">Notes:</label>
      <input
        id="notes"
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

export default Notes;
