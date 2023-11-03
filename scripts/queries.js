import { Recipe, Category, User, db, FoodItem } from "../model.js";

const user1 = await User.findOne({ include: Recipe });
const recipe1 = await Recipe.findOne({ include: User });
const category1 = await Category.findOne({ include: Recipe });
const recipes = await Recipe.findAll({ include: User });
const food1 = await FoodItem.findOne({ include: Recipe });
await user1.addRecipe(recipe1);
await category1.addRecipe(recipe1);
// await recipe1.addUser(user1);
// await console.log(recipe1);
// console.log(category1.recipes);
await food1.addRecipe(recipe1);
await recipe1.addUser(user1);
await recipe1.addFoodItem(food1);

console.log(food1);
console.log(recipe1);

// console.log(user1);

// console.log(recipes);

await db.close();

// select * from categories;
// select * from favorites;
// select * from food_items;
// select * from recipe_foods;
// select * from recipes;
// select * from users;
