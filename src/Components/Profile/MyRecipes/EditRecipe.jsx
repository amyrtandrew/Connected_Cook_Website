import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const EditRecipe = () => {
  const { recipeId } = useParams();
  const [values, setValues] = useState({
    recipeName: "",
    category: "",
    servings: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    notes: "",
    image: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:5555/api/recipe/" + recipeId)
      .then((res) => {
        setValues({
          ...values,
          recipeName: res.data.recipeName,
          category: res.data.category,
          servings: res.data.servings,
          instructions: res.data.instructions,
          prepTime: res.data.prepTime,
          cookTime: res.data.cookTime,
          notes: res.data.notes,
          image: res.data.image,
        });
        console.log(res.data.category);
        console.log(values);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleEdit = async (event) => {
    event.preventDefault();

    // console.log(values.image);
    // console.log(values);
    // let body = {
    //   recipeName,
    //   category,
    //   servings,
    //   instructions,
    //   prepTime,
    //   cookTime,
    //   notes,
    //   image,
    //   // image: URL.createObjectURL(values.image),
    // };
    console.log(values);
    const res = await axios.put(`/api/edit-recipe/${recipeId}`, values);

    if (res.data.success) {
      navigate(`/recipe/${res.data.recipeId}`);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    const res = await axios.delete(
      `http://localhost:5555/api/edit-recipe/${recipeId}`
    );

    if (res.data.success) {
      navigate("/my-recipes");
    }
  };

  return (
    <div>
      <form className="create-recipe-form" onSubmit={(e) => handleEdit(e)}>
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          name="recipeName"
          id="recipeName"
          type="text"
          required
          placeholder="name"
          value={values.recipeName}
          onChange={(e) => setValues({ ...values, recipeName: e.target.value })}
        />
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          value={values.category}
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        >
          <option value="1">Appetizer</option>
          <option value="2">Breakfast</option>
          <option value="3">Lunch</option>
          <option value="4">Dinner</option>
          <option value="5">Dessert</option>
          <option value="6">Other</option>
        </select>

        <label htmlFor="servings">Servings:</label>
        <input
          name="servings"
          id="servings"
          type="text"
          value={values.servings}
          onChange={(e) => setValues({ ...values, servings: e.target.value })}
        />
        <label htmlFor="instructions">Instructions:</label>
        <input
          name="instructions"
          id="instructions"
          type="text"
          value={values.instructions}
          onChange={(e) =>
            setValues({ ...values, instructions: e.target.value })
          }
        />
        <label htmlFor="prepTime">Prep Time:</label>
        <input
          name="prepTime"
          id="prepTime"
          type="text"
          value={values.prepTime}
          onChange={(e) => setValues({ ...values, prepTime: e.target.value })}
        />
        <label htmlFor="cookTime">Cook Time:</label>
        <input
          name="cookTime"
          id="cookTime"
          type="text"
          value={values.cookTime}
          onChange={(e) => setValues({ ...values, cookTime: e.target.value })}
        />
        <label htmlFor="notes">Notes:</label>
        <input
          name="notes"
          id="notes"
          type="text"
          value={values.notes}
          onChange={(e) => setValues({ ...values, notes: e.target.value })}
        />
        <input
          name="image"
          id="image"
          accept="image/*"
          type="file"
          // value={values.image}
          onChange={(e) => setValues({ ...values, image: e.target.files[0] })}
        />
        <button type="submit">Save</button>
      </form>
      <div className="home-link">
        <Link to={`/recipe/${recipeId}`}>
          <button>Cancel</button>
        </Link>
        <button onClick={(e) => handleDelete(e)}>Delete Recipe</button>
      </div>
    </div>
  );
};

export default EditRecipe;
