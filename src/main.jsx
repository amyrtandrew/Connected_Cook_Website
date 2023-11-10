import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RecipeGrid from "./Components/Profile/Explore/ExploreGrid.jsx";
import { RouterProvider } from "react-router-dom";
import ExploreHeader from "./Components/Profile/Explore/ExploreHeader.jsx";
import axios from "axios";
import ErrorPage from "./pages/ErrorPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountForm from "./Components/Login/CreateAccountForm.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import CreateRecipePage from "./pages/CreateRecipePage.jsx";
import EditRecipe from "./Components/Profile/MyRecipes/EditRecipe.jsx";
import MyRecipesPage from "./pages/MyRecipesPage.jsx";
import MyRecipesGrid from "./Components/Profile/MyRecipes/MyRecipesGrid.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      {/* <Route index element={<LoginPage />} /> */}
      <Route path="my-recipes" element={<MyRecipesGrid />} />

      <Route path="explore-page" element={<ExplorePage />} />

      {/* All Movies */}
      <Route path="recipe/:id" element={<RecipePage />} />

      <Route path="login" element={<LoginPage />} />
      <Route path="create-account" element={<CreateAccountPage />} />
      <Route path="create-recipe" element={<CreateRecipePage />} />
      <Route path="edit-recipe/:recipeId" element={<EditRecipe />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
