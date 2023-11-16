import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MyRecipesGrid = ({ recipeList, favRecipeList }) => {
  return (
    <div>
      <nav className="grid-navbar">
        <NavLink to="/create-recipe" href="#">
          <button className="plus-button">+</button>
        </NavLink>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">Category</Dropdown.Item>
            <Dropdown.Item href="#/action-3">A-Z</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Favorites</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>

      <div className="recipe-grid">
        <h1>My Recipes</h1>
        {recipeList}
        <h1>Favorited</h1>
        {favRecipeList}
        {/* {allRecipes} */}
        {/* <h1>My favorite recipes</h1> */}
        {/* {favRecipeList} */}
        <Outlet />
      </div>
    </div>
  );
};

export default MyRecipesGrid;
