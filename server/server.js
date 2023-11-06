import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { Recipe, User } from "../model.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

import handlerFunctions from "./controller.js";

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
    // req.session.userId = user.userId;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post("/api/logout", loginRequired, (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.get("/api/recipe/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await Recipe.findByPk(recipeId);
  res.json(recipe);
});

app.post("/api/recipe", handlerFunctions.addRecipe);
app.delete("/api/recipe/:id", handlerFunctions.deleteRecipe);
app.put("/api/recipe/:id", handlerFunctions.editRecipe);

ViteExpress.listen(app, 5555, () =>
  console.log(`Server working on http://localhost:5555`)
);
