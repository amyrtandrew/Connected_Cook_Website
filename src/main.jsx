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
import RecipeGrid from "./Components/Profile/MyRecipes/RecipeGrid.jsx";
import { RouterProvider } from "react-router-dom";
import ExploreHeader from "./Components/Profile/Explore/Header/ExploreHeader.jsx";
import axios from "axios";
import ErrorPage from "./pages/ErrorPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountForm from "./Components/Login/CreateAccountForm.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import CreateRecipePage from "./pages/CreateRecipePage.jsx";
import EditRecipe from "./Components/Profile/MyRecipes/EditRecipe.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="recipe-grid" element={<RecipeGrid />} />

      {/* <Route
        path="recipe"
        element={<SingleRecipe />}
        loader={async () => {
          const res = await axios.get("/api/recipe");
          return { initialData: res.data };
        }}
      /> */}

      <Route path="/explore-header" element={<ExploreHeader />} />

      {/* All Movies */}
      <Route
        path="recipe/:id"
        element={<RecipePage />}
        // loader={async () => {
        //   const res = await axios.get("/api/recipe/:id");
        //   return { movies: res.data };
        // }}
      />

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
