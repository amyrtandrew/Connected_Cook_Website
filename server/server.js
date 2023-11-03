import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

import handlerFunctions from "./controller.js";

app.get("/api/recipe", handlerFunctions.getRecipe);
app.post("/api/recipe", handlerFunctions.addRecipe);
app.delete("/api/recipe/:id", handlerFunctions.deleteRecipe);
app.put("/api/recipe/:id", handlerFunctions.editRecipe);

ViteExpress.listen(app, 5555, () =>
  console.log(`Server working on http://localhost:5555`)
);
