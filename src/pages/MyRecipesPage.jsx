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
  const [favorite, setFavorite] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [auto, setAuto] = useState(false);
  const [recipeData, setRecipeData] = useState([]);

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

  // Do this, but one for myRecipes array, and myFavRecipes array
  // myRecipes.map((recipe) => {
  //   return (
  //     <>
  //       <Link
  //         to={`/recipe/${recipe.recipeId}`}
  //         className="recipe-square"
  //         key={recipe.recipeId}
  //       >
  //         {recipe.recipeName}
  //         {/* <img id="recipe-image" src={recipe.image} /> */}
  //       </Link>
  //     </>
  //   );
  // });

  // console.log(myFavRecipes);
  // myFavRecipes.map((recipe) => {
  //   return (
  //     <>
  //       <Link
  //         to={`/recipe/${recipe.recipeId}`}
  //         className="recipe-square"
  //         key={recipe.recipeId}
  //       >
  //         {recipe.recipe.recipeName}
  //         {/* <img id="recipe-image" src={recipe.recipe.image} /> */}
  //       </Link>
  //     </>
  //   );
  // });
  let allRecipes = myRecipes.concat(myFavRecipes);
  console.log(allRecipes);

  myRecipes.sort((a, b) => a.recipeName.localeCompare(b.recipeName));

  // allRecipes.map((recipe) => {
  //   return (
  //     <Link
  //       to={`/recipe/${recipe.recipeId}`}
  //       className="recipe-link"
  //       key={recipe.recipeId}
  //     >
  //       {recipe.recipeName ?? recipe.recipe.recipeName}
  //       {/* <img id="recipe-image" src={recipe.image} /> */}
  //     </Link>
  //   );
  // });

  useEffect(
    () => {
      let filteredData;
      if (favorite) {
        filteredData = myFavRecipes;
      } else if (alphabetical) {
        filteredData = allRecipes;
      } else if (auto) {
        filteredData = myRecipes;
      }
      setRecipeData(filteredData);
    },
    [auto, favorite, alphabetical],
    myFavRecipes,
    allRecipes,
    myRecipes
  );

  const changeCat = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setAuto(selectedValue === "category");
    setFavorite(selectedValue === "favorites");
    setAlphabetical(selectedValue === "alphabetical");
    console.log(e.target.value);
  };

  console.log(recipeData);

  return (
    <>
      <NavBar />
      <div className="home-page">
        <MyRecipesHeader changeCat={changeCat} />
        <MyRecipesGrid allRecipes={allRecipes} recipeData={recipeData} />
        <Outlet />
      </div>
    </>
  );
}
export default MyRecipesPage;
