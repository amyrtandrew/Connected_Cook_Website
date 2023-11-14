import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from "express-session";
import authFunctions from "./authController.js";
import recipeFunctions from "./recipeController.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
  session({
    secret: "amy",
    saveUninitialized: false,
    resave: false,
  })
);

const { login, logout, createAccount } = authFunctions;
const {
  createRecipe,
  editRecipe,
  deleteRecipe,
  viewRecipe,
  allRecipes,
  myRecipes,
  myFavRecipes,
  favoriteRecipe,
  unfavoriteRecipe,
} = recipeFunctions;

function loginRequired(req, res, next) {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    next();
  }
}

///Routes///

//Authentication
app.post("/api/auth", login);
app.post("/api/logout", loginRequired, logout);
app.post("/api/create-account", createAccount);
//Recipes
app.post("/api/create-recipe", loginRequired, createRecipe);
app.put("/api/edit-recipe/:recipeId", editRecipe);
app.delete("/api/edit-recipe/:recipeId", deleteRecipe);
app.get("/api/recipe/:recipeId", viewRecipe);
app.get("/api/all-recipes", allRecipes);
app.get("/api/my-recipes", myRecipes);
app.get("/api/my-recipes", myRecipes);
app.get("/api/my-favrecipes", myFavRecipes);
app.post("/api/favorite/:recipeId", favoriteRecipe);
app.post("/api/unfavorite/:recipeId", unfavoriteRecipe);

ViteExpress.listen(app, 5555, () =>
  console.log(`Server working on http://localhost:5555`)
);
