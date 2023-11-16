import React from "react";

const Logout = ({ onLogout }) => {
  return (
    <form onSubmit={onLogout} className="logout-form">
      <button className="logout-btn">Logout</button>
    </form>
  );
};

export default Logout;
