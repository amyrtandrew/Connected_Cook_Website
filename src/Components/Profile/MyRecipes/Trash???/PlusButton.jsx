import React from "react";

const PlusButton = ({ onClick }) => {
  return (
    <div>
      <button className="plus-button" onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default PlusButton;
