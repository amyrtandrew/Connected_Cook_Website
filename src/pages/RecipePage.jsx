import axios from "axios";
import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../Components/NavBar/NavBar";

export default function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams("");
  const [fav, setFav] = useState(false);

  let userId = useSelector((state) => state.userId);
  const loadRecipe = async () => {
    const { data } = await axios.get(`/api/recipe/${recipeId}`);
    for (let favorite of data.favorites) {
      if (favorite.userId === userId) {
        setFav(true);
      }
    }
    setRecipe(data);
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  const handleFavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const res = await axios.post(`/api/favorite/${recipeId}`);
    if (res.data.success) {
      setFav(true);
      loadRecipe();
    }
  };

  const handleUnfavorite = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const res = await axios.post(`/api/unfavorite/${recipeId}`);
    if (res.data.success) {
      setFav(false);
      loadRecipe();
      // setLike(like - 1);
    }
  };

  return (
    <>
      <NavBar />
      {recipe && (
        <div>
          <h1
            className="recipe-title"
            style={{
              color: "black / 100%",
              position: "absolute",
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              top: "30%", // Move to the vertical center
              left: "50%", // Move to the horizontal center
              transform: "translate(-50%, -50%)", // Adjust for both horizontal and vertical centering
              color: "black",
            }}
          >
            {recipe.recipeName}
          </h1>
          <div
            className="single-recipe"
            style={{
              position: "relative",
              display: "flex",
              marginTop: "10vh",
              paddingTop: "50px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20vh",
              borderRadius: "9px",
              padding: "5vh 1vw 5vh 1vw",
              height: "55vh",
              width: "50vw",
              backgroundColor: "rgb(255 255 255 / 50%)",

              // alignContent: "center",
            }}
          >
            <div>
              {/* <img
                src={recipe.image}
                style={{
                  position: "relative",
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "20vw",
                  marginTop: "20vh",
                }}
              /> */}
            </div>
            <div>
              <ul>
                <li>
                  <span className="recipe-comp">Category:</span>
                  {recipe.categoryId === 1
                    ? " Appetizer"
                    : recipe.categoryId === 2
                    ? " Breakfast"
                    : recipe.categoryId === 3
                    ? " Lunch"
                    : recipe.categoryId === 4
                    ? " Dinner"
                    : recipe.categoryId === 5
                    ? " Dessert"
                    : " Other"}
                </li>
                <li>
                  <span className="recipe-comp">Servings:</span>{" "}
                  {recipe.servings} people
                </li>
                <li>
                  {" "}
                  <span className="recipe-comp">Prep Time::</span>{" "}
                  {recipe.prepTime} minutes
                </li>
                <li>
                  {" "}
                  <span className="recipe-comp">Cook Time:</span>{" "}
                  {recipe.cookTime} minutes
                </li>
                <li>
                  {" "}
                  <span className="recipe-comp">Total Time:</span>{" "}
                  {recipe.prepTime + recipe.cookTime} minutes
                </li>
                <li>
                  <span className="recipe-comp">Ingredients:</span> <br />
                  <span>{recipe.ingredients}</span>{" "}
                </li>
                <li>
                  {" "}
                  <span className="recipe-comp">Instructions:</span> <br />{" "}
                  <span>{recipe.instructions}</span>{" "}
                </li>
                <li>
                  <span className="recipe-comp"> Notes:</span> <br />{" "}
                  <span>{recipe.notes}</span>{" "}
                </li>
              </ul>
              <div
              // style={{
              //   position: "relative",
              //   display: "flex",
              //   width: "fit-content",
              //   height: "5vh",
              //   marginTop: "3vh",
              //   textAlign: "center",
              //   backgoundColor: "blue",
              // }}
              >
                {userId === recipe.userId ? (
                  <Link to={`/edit-recipe/${recipe.recipeId}`}>
                    <button
                      style={{
                        position: "absolute",
                        display: "flex",
                        bottom: "1vh",
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                        backgroundColor: "#7B77B4",
                        color: "black",
                        width: "5vw",
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                ) : (
                  <div>
                    <button
                      className="fav-btn"
                      style={{
                        position: "absolute",
                        display: "flex",
                        bottom: "1vh",
                        backgroundColor: "#7B77B4",
                        color: "black",
                      }}
                      onClick={() => {
                        if (!fav) {
                          handleFavorite();
                        } else {
                          handleUnfavorite();
                        }
                      }}
                    >
                      Favorite
                    </button>
                    <span
                      style={{
                        fontSize: "23px",
                        position: "relative",
                        display: "flex",
                        marginLeft: "5.3vw",
                        top: "-0.5vh",
                      }}
                    >
                      {" "}
                      {recipe.favorites.length}
                    </span>
                  </div>
                )}
                <Link to="/my-recipes">
                  <button
                    className="back-btn"
                    style={{
                      position: "absolute",
                      display: "flex",
                      bottom: "1vh",
                      right: "1vh",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Back to Recipes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
