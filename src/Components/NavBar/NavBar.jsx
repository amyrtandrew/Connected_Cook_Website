import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logout from "./Logout";
import Logo from "./Logo";
import ExploreHeader from "../Profile/Explore/ExploreHeader";
import { NavLink } from "react-router-dom";
// import MyRecipes from "../../pages/MyRecipes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import RecipePage from "../../pages/RecipePage";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/logout");
    if (res.data.success) {
      navigate("/login");
    }
  };

  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand" href="#">
          <Logo />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/explore-page" className="nav-link" href="#">
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-recipes" className="nav-link" href="#">
                My Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <Logout onLogout={handleLogout} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
