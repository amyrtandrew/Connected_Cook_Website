import { User, Recipe, Category, db } from "../model.js";

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
  ingredients: "1 cup sugar, 2 cups flour, 1 tsp vanilla",
  instructions: "bake for an hour",
  prepTime: 10,
  cookTime: 15,
  notes: "these are my notes",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSyZkrAGCHZsFF3-iaqbtMo_ngPKb4Ry28_A&usqp=CAU",
});

const chickenStrips = await Recipe.create({
  recipeName: "Chicken Strips",
  servings: 1,
  ingredients: "1/2 cup canola oil, 2 lbs chicken, bbq sauce",
  instructions: "deep fry",
  prepTime: 1,
  cookTime: 1,
  notes: "fry at 350 degrees",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQik5JrixH7m16xmBsPfuN8jB8HntaKvYJIA&usqp=CAU",
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

console.log(user1);
console.log(cookie);
console.log(chickenStrips);
// console.log(breakfast);

await db.close();
console.log("Finished seeding database!");
