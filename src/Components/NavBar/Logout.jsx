import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <NavLink to="/login" className="nav-link" href="#">
        Logout
      </NavLink>
    </div>
  );
};

export default Logout;
