import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const MyRecipesGrid = ({ allRecipes, recipeData }) => {
  console.log(recipeData);
  const renderedRecipes = recipeData
    ? recipeData.map((recipe) => (
        <Link
          to={`/recipe/${recipe.recipeId}`}
          className="recipe-square"
          key={recipe.recipeId}
        >
          {recipe.recipeName ?? recipe.recipe.recipeName}
          <img
            className="grid-image"
            src={recipe.image ?? recipe.recipe.image}
          />
          {/* {recipe.image ?? recipe.recipe.image} */}
          {/* Additional information or components related to the recipe can be added here */}
        </Link>
      ))
    : null;

  return (
    <div className="recipe-grid">
      {renderedRecipes}
      <Outlet />
    </div>
  );
};

export default MyRecipesGrid;
