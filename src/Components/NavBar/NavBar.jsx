import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Logo from './Logo';
import ExploreHeader from '../Profile/Explore/Header/ExploreHeader';
import { Link } from 'react-router-dom';
import MyRecipes from '../../pages/MyRecipes';



function NavBar() {
  return (
  <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <a className="navbar-brand" href="#"><Logo /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to='/ExploreHeader' className="nav-link" href="#" >Explore</Link>
      </li>
      <li className="nav-item">
        <Link to='/MyRecipes' className="nav-link" href="#">My Recipes</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="navbarHamburger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <HamburgerMenu />
        </a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default NavBar;