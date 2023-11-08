import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { Recipe, User } from "../model.js";
import session from "express-session";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
  session({
    secret: "amy",
    saveUninitialized: false,
    resave: false,
  })
);

// import handlerFunctions from "./controller.js";

function loginRequired(req, res, next) {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    next();
  }
}

app.post("/api/auth", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    // console.log(req.session.userId);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post("/api/create-account", async (req, res) => {
  const { fname, lname, username, password } = req.body;
  const user = await User.create({
    fname: fname,
    lname: lname,
    username: username,
    password: password,
  });
  // console.log(req.body.fname);
  if (user) {
    req.session.userId = user.userId;
    // console.log(user.userId);
    res.json({ success: true });
  }
});

app.post("/api/create-recipe", loginRequired, async (req, res) => {
  const { recipeName, servings, instructions, prepTime, cookTime, notes } =
    req.body;
  const { userId } = req.session;
  const user = await User.findByPk(userId);
  const recipe = await user.createRecipe({
    recipeName: recipeName,
    servings: servings,
    instructions: instructions,
    prepTime: prepTime,
    cookTime: cookTime,
    notes: notes,
  });
  // console.log(req.body.recipeName);
  if (recipe) {
    // await user.createRecipe(recipe);
    res.json({ success: true, recipeId: recipe.recipeId });
  }
});

app.put("/api/edit-recipe/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  const { recipeName, servings, instructions, prepTime, cookTime, notes } =
    req.body;
  console.log(req.body.recipeName);
  const recipe = await Recipe.findByPk(recipeId);
  if (recipe) {
    (recipe.recipeName = recipeName),
      (recipe.servings = servings),
      (recipe.instructions = instructions),
      (recipe.prepTime = prepTime),
      (recipe.cookTime = cookTime),
      (recipe.notes = notes),
      await recipe.save();
    res.json({ success: true, recipeId: recipe.recipeId });
  }
});

app.delete("/api/edit-recipe/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await Recipe.findByPk(recipeId);
  if (recipe) {
    await recipe.destroy();
    res.json({ success: true, recipeId: recipe.recipeId });
  }
});

app.post("/api/logout", loginRequired, (req, res) => {
  console.log(req.session.userId);
  req.session.destroy();
  res.json({ success: true });
});

app.get("/api/recipe/:recipeId", loginRequired, async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await Recipe.findByPk(recipeId);
  if (req.session.userId) {
    res.json(recipe);
  } else {
    console.log("error");
  }
});

ViteExpress.listen(app, 5555, () =>
  console.log(`Server working on http://localhost:5555`)
);
