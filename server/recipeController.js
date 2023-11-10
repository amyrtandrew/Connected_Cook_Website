import { Recipe, User } from "../model.js";

const recipeFunctions = {
  //create a recipe
  createRecipe: async (req, res) => {
    const {
      recipeName,
      servings,
      instructions,
      prepTime,
      cookTime,
      notes,
      image,
    } = req.body;
    // const { imageType } = req.file.mimetype;
    // const { imageName } = req.file.originalname;
    // const { imageData } = req.file.buffer;
    const { userId } = req.session;
    const user = await User.findByPk(userId);
    const recipe = await user.createRecipe({
      recipeName: recipeName,
      servings: servings || null,
      instructions: instructions || null,
      prepTime: prepTime || null,
      cookTime: cookTime || null,
      notes: notes || null,
      image: image || null,
    });
    console.log(req.body);
    // console.log(req.body.recipeName);
    if (recipe) {
      res.json({ success: true, recipeId: recipe.recipeId });
    }
    // res.sendStatus(200);
  },

  //edit a recipe
  editRecipe: async (req, res) => {
    const { recipeId } = req.params;
    const {
      recipeName,
      servings,
      instructions,
      prepTime,
      cookTime,
      notes,
      image,
    } = req.body;
    console.log(req.body.recipeName);
    console.log(req.body);
    const recipe = await Recipe.findByPk(recipeId);
    if (recipe) {
      (recipe.recipeName = recipeName),
        (recipe.servings = +servings ?? recipe.servings),
        (recipe.instructions = instructions ?? recipe.instructions),
        (recipe.prepTime = +prepTime ?? recipe.prepTime),
        (recipe.cookTime = +cookTime ?? recipe.cookTime),
        (recipe.notes = notes ?? recipe.notes),
        (recipe.image = image ?? recipe.image),
        await recipe.save();
      res.json({ success: true, recipeId: recipe.recipeId });
    }
    // res.sendStatus(200);
  },

  //delete a recipe
  deleteRecipe: async (req, res) => {
    const { recipeId } = req.params;
    const recipe = await Recipe.findByPk(recipeId);
    if (recipe) {
      await recipe.destroy();
      res.json({ success: true, recipeId: recipe.recipeId });
    }
  },

  //view a specific recipe
  viewRecipe: async (req, res) => {
    // console.log(req.session.userId);
    const { recipeId } = req.params;
    const recipe = await Recipe.findByPk(recipeId);
    // console.log(recipe.userId);
    // console.log(recipe.userId);
    if (recipe && req.session.userId === recipe.userId) {
      res.json(recipe);
    } else {
      console.log("error");
    }
  },
  //view all recipes
  allRecipes: async (req, res) => {
    const {
      recipeName,
      servings,
      instructions,
      prepTime,
      cookTime,
      notes,
      image,
    } = req.body;
    const recipes = await Recipe.findAll({
      recipeName: recipeName,
      servings: servings || null,
      instructions: instructions || null,
      prepTime: prepTime || null,
      cookTime: cookTime || null,
      notes: notes || null,
      image: image || null,
    });
    // console.log(recipes);
    if (recipes) {
      res.send(recipes);
    }
  },
  myRecipes: async (req, res) => {
    const recipes = await Recipe.findAll({
      where: { userId: req.session.userId },
    });
    if (recipes) {
      res.send(recipes);
    }
  },
};
export default recipeFunctions;
