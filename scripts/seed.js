import { User, Recipe, FoodItem, Category, db } from "../model.js";

console.log("Syncing database...");
await db.sync({ force: true });

console.log("Seeding database...");

const user1 = await User.create({
  fname: "Amy",
  lname: "Andrew",
  username: "asdf",
  password: "asdf",
});

const cookie = await Recipe.create({
  recipeName: "cookies",
  servings: 5,
  instructions: "bake for an hour",
  prepTime: 10,
  cookTime: 15,
  notes: "these are my notes",
});

const chickenStrips = await Recipe.create({
  recipeName: "Chicken Strips",
  servings: 1,
  instructions: "deep fry",
  prepTime: 1,
  cookTime: 1,
  notes: "fry at 350 degrees",
});

let categories = [
  "appetizer",
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "other",
];
for (const cat of categories) {
  await Category.create({
    name: cat,
  });
}

const sugar = await FoodItem.create({
  foodName: "sugar",
  amount: 4.5,
  calories: 425,
});

console.log(user1);
console.log(cookie);
console.log(chickenStrips);
// console.log(breakfast);

await db.close();
console.log("Finished seeding database!");
