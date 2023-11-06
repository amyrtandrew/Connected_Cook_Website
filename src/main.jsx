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
import SingleRecipe from "./Components/Profile/MyRecipes/SingleRecipe/SingleRecipe.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountForm from "./Components/Login/CreateAccountForm.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="recipe-grid" element={<RecipeGrid />} />

      <Route
        path="recipe"
        element={<SingleRecipe />}
        loader={async () => {
          const res = await axios.get("/api/recipe");
          return { initialData: res.data };
        }}
      />

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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
