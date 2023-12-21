import { Recipe, Category, User, db, FoodItem } from "../model.js";

const user1 = await User.findOne({ include: Recipe });
const recipe1 = await Recipe.findOne({ include: User });
const category1 = await Category.findOne({ include: Recipe });
const recipes = await Recipe.findAll({ include: User });
const food1 = await FoodItem.findOne({ include: Recipe });
await user1.addRecipe(recipe1);
await category1.addRecipe(recipe1);
await food1.addRecipe(recipe1);
await recipe1.addUser(user1);
await recipe1.addFoodItem(food1);


await db.close();
