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
import { RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import CreateRecipePage from "./pages/CreateRecipePage.jsx";
import EditRecipe from "./Components/Profile/MyRecipes/EditRecipe.jsx";
import MyRecipesGrid from "./Components/Profile/MyRecipes/MyRecipesGrid.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import RecipePage from "./pages/RecipePage.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import MyRecipesPage from "./pages/MyRecipesPage.jsx";
import Blog1Page from "./pages/Blog1Page.jsx";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<LoginPage />} errorElement={<ErrorPage />} /> */}
      {/* <Route index element={<LoginPage />} /> */}
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route index element={<ExplorePage />} />
        <Route path="my-recipes" element={<MyRecipesPage />} />
        <Route path="explore-page" element={<ExplorePage />} />
        {/* All Movies */}
        <Route path="recipe/:recipeId" element={<RecipePage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="create-account" element={<CreateAccountPage />} />
        <Route path="create-recipe" element={<CreateRecipePage />} />
        <Route path="edit-recipe/:recipeId" element={<EditRecipe />} />
        <Route path="blog1" element={<Blog1Page />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
