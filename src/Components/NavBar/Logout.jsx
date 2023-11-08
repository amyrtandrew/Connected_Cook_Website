import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  return (
    <button onSubmit={onLogout} className="nav-link">
      Logout
    </button>
  );
};

export default Logout;
