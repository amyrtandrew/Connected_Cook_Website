import { Link, Outlet } from "react-router-dom";

const MyRecipesGrid = ({ recipeData }) => {
  const renderedRecipes = recipeData
    ? recipeData.map((recipe) => (
        <Link
          to={`/recipe/${recipe.recipeId}`}
          className="col-md recipe-square"
          key={recipe.recipeId}
        >
          {" "}
          <h1 className="grid-title">
            {recipe.recipeName ?? recipe.recipe.recipeName}
          </h1>
          <img
            className="grid-image"
            src={recipe.image ?? recipe.recipe.image}
          />
        </Link>
      ))
    : null;

  return (
    <div className="container recipe-grid">
      {renderedRecipes}
      <Outlet />
    </div>
  );
};

export default MyRecipesGrid;
