import React from "react";

const Logout = ({ onLogout }) => {
  return (
    <form onSubmit={onLogout} className="nav-link">
      <button>Logout</button>
    </form>
  );
};

export default Logout;
