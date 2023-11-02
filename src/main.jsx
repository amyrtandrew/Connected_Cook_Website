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
import NavBar from "./Components/NavBar/NavBar.jsx";
import { RouterProvider } from "react-router-dom";
import ExploreHeader from "./Components/Profile/Explore/Header/ExploreHeader.jsx";
import MyRecipes from "./pages/MyRecipes.jsx";
import axios from "axios";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./Components/Login/Login.jsx";
import CreateAccount from "./Components/Login/CreateAccount.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      {/* <Route index element={<ExploreHeader/>} /> */}
      <Route path="/navbar" element={<NavBar />}>
        <Route path="/recipe-grid" element={<RecipeGrid />} />
        <Route path="/explore-header" element={<ExploreHeader />} />
      </Route>
      {/* <Route path="/login" element={<Login />}>
        <Route path="/create-account" element={<CreateAccount />} />
      </Route> */}
    </Route>
  )
);

axios
  .get("/recipe")
  .then((response) => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <App initialData={response.data} />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.log(error);
  });
