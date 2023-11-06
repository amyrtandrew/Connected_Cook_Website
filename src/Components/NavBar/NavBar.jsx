import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logout from "./Logout";
import Logo from "./Logo";
import ExploreHeader from "../Profile/Explore/Header/ExploreHeader";
import { NavLink } from "react-router-dom";
// import MyRecipes from "../../pages/MyRecipes";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
              <NavLink to="/explore-header" className="nav-link" href="#">
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recipe-grid" className="nav-link" href="#">
                My Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <Logout />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
