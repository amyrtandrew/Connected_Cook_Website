import {
  User,
  Recipe,
  UserRecipe,
  Favorite,
  RecipeFood,
  FoodItem,
  Category,
  db,
} from "../model.js";

import recipeData from "../data/recipes.json" assert { type: "json" };

console.log("Syncing database...");
await db.sync({ force: true });

console.log("Seeding database...");

const {
  name,
  category,
  prepTime,
  cookTime,
  servings,
  ingredients,
  instructions,
  notes,
} = Recipe;

const recipiesInDB = await Promise.all(
  recipeData.map((recipe) => {
    const newRecipe = Recipe.create({
      name,
      category,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
    });

    return newRecipe;
  })
);

console.log(recipiesInDB);

const usersInDB = await Promise.all(usersToCreate);

console.log(usersInDB);

await db.close();
console.log("Finished seeding database!");
