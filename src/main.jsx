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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<ExploreHeader/>} /> */}
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/MyRecipes" element={<MyRecipes />} />
      <Route path="/ExploreHeader" element={<ExploreHeader />} />
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
