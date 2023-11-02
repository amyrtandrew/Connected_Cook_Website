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

console.log("Syncing database...");
await db.sync({ force: true });

console.log("Seeding database...");

const cookie = await Recipe.create({
  recipeId: 1,
  recipeName: "cookies",
  recipeFood: 3,
  servings: 5,
  instructions: "bake for an hour",
  prepTime: 10,
  cookTime: 15,
  favorite: true,
  categoryId: 1,
  notes: "these are my notes",
});

console.log(cookie);

await db.close();
console.log("Finished seeding database!");
