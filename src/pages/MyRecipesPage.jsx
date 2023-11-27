import NavBar from "../Components/NavBar/NavBar";
import ExploreHeader from "../Components/Profile/Explore/ExploreHeader";
import RecipeGrid from "../Components/Profile/Explore/ExploreGrid";
import { Outlet } from "react-router";
import MyRecipesGrid from "../Components/Profile/MyRecipes/MyRecipesGrid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import MyRecipesHeader from "../Components/Profile/MyRecipes/MyRecipesHeader";
// import MyRecipesHeader from "../Components/Profile/MyRecipes/MyRecipesHeader";

function MyRecipesPage() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [myFavRecipes, setMyFavRecipes] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    axios
      .get("/api/my-recipes")
      .then((res) => {
        // setRecipes(res.data);
        let { data } = res;
        setMyRecipes(data.myRecipes);
        // setMyFavRecipes(res.data.myFavRecipes)
      })
      .catch((err) => console.log(err));
    axios.get("/api/my-favrecipes").then((res) => {
      // setRecipes(res.data);
      // setMyRecipes(res.data.myRecipes)
      setMyFavRecipes(res.data.favRecipes);
    });
  }, []);

  // const filterCat = (e) => {
  //   e.preventDefault()

  //   let recipeData = [...allRecipes];
  //   let favData = [...]

  //   if (favCat) {
  //     recipeData = recipeData.filter((i) => )
  //   }
  // }

  // Do this, but one for myRecipes array, and myFavRecipes array
  let recipeList = myRecipes.map((recipe) => {
    return (
      <>
        <NavBar />
        <Link
          to={`/recipe/${recipe.recipeId}`}
          className="recipe-square"
          key={recipe.recipeId}
        >
          {recipe.recipeName}
          {/* <img id="recipe-image" src={recipe.image} /> */}
        </Link>
      </>
    );
  });

  // console.log(myFavRecipes);
  let favRecipeList = myFavRecipes.map((recipe) => {
    return (
      <Link
        to={`/recipe/${recipe.recipeId}`}
        className="recipe-square"
        key={recipe.recipeId}
      >
        {recipe.recipe.recipeName}
        {/* <img id="recipe-image" src={recipe.recipe.image} /> */}
      </Link>
    );
  });
  let allRecipes = recipeList.concat(favRecipeList);

  const handleSort = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // if (e.target.value === "favorites") {
    setSorted(true);
    console.log(sorted);
    console.log("sorted is now true");
    // }
  };

  myRecipes.sort((a, b) => a.recipeName.localeCompare(b.recipeName));
  // console.log(test);

  // let ordered = myRecipes.sort();
  let alphaList = myRecipes.map((recipe) => {
    return (
      <Link
        to={`/recipe/${recipe.recipeId}`}
        className="recipe-square"
        key={recipe.recipeId}
      >
        {recipe.recipeName}
        {/* <img id="recipe-image" src={recipe.image} /> */}
      </Link>
    );
  });
  // console.log(recipeList);

  return (
    <div className="home-page">
      <MyRecipesHeader />
      <MyRecipesGrid
        recipeList={recipeList}
        favRecipeList={favRecipeList}
        handleSort={handleSort}
        allRecipes={allRecipes}
        sorted={sorted}
        alphaList={alphaList}
      />
      <Outlet />
    </div>
  );
}
export default MyRecipesPage;
