import { Recipe, User } from "../model.js";

const recipeFunctions = {
  //create a recipe
  createRecipe: async (req, res) => {
    const {
      recipeName,
      category,
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
    console.log(category);
    const user = await User.findByPk(userId);
    const recipe = await user.createRecipe({
      recipeName: recipeName,
      categoryId: +category || null,
      servings: +servings || null,
      instructions: instructions || null,
      prepTime: +prepTime || null,
      cookTime: +cookTime || null,
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
      category,
      servings,
      instructions,
      prepTime,
      cookTime,
      notes,
      image,
    } = req.body;
    // category = +category;
    console.log(category);
    const recipe = await Recipe.findByPk(recipeId);
    if (recipe) {
      console.log(recipe);
      (recipe.recipeName = recipeName),
        (recipe.categoryId = +category ?? recipe.category),
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
    const { recipeId } = req.params;
    const recipe = await Recipe.findByPk(recipeId);
    if (recipe) {
      // && req.session.userId === recipe.userId
      res.json(recipe);
    } else {
      console.log("error");
    }
  },
  //view all recipes
  allRecipes: async (req, res) => {
    const recipes = await Recipe.findAll();
    if (recipes) {
      res.send(recipes);
    }
  },
  //view only your recipes
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
