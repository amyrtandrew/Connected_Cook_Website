import { Link, Outlet } from "react-router-dom";

const MyRecipesGrid = ({ allRecipes, recipeData }) => {
  const renderedRecipes = recipeData
    ? recipeData.map((recipe) => (
        <Link
          to={`/recipe/${recipe.recipeId}`}
          className="recipe-square"
          key={recipe.recipeId}
        >
          {recipe.recipeName ?? recipe.recipe.recipeName}
          {recipe.image ?? recipe.recipe.image}
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
