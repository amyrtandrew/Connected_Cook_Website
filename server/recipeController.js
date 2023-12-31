import { Recipe, User, Favorite } from "../model.js";

const recipeFunctions = {
  //create a recipe
  createRecipe: async (req, res) => {
    const {
      recipeName,
      category,
      servings,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      notes,
      image,
    } = req.body;
    const { userId } = req.session;
    const user = await User.findByPk(userId);
    const recipe = await user.createRecipe({
      recipeName: recipeName,
      categoryId: +category || null,
      servings: +servings || null,
      ingredients: ingredients || null,
      instructions: instructions || null,
      prepTime: +prepTime || null,
      cookTime: +cookTime || null,
      notes: notes || null,
      image: image || null,
    });
    if (recipe) {
      res.json({ success: true, recipeId: recipe.recipeId });
    }
  },

  //edit a recipe
  editRecipe: async (req, res) => {
    const { recipeId } = req.params;
    const {
      recipeName,
      categoryId,
      servings,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      notes,
      image,
    } = req.body;
    const recipe = await Recipe.findByPk(recipeId);
    if (recipe) {
      (recipe.recipeName = recipeName),
        (recipe.categoryId = +categoryId ?? recipe.categoryId),
        (recipe.servings = +servings ?? recipe.servings),
        (recipe.ingredients = ingredients ?? recipe.ingredients),
        (recipe.instructions = instructions ?? recipe.instructions),
        (recipe.prepTime = +prepTime ?? recipe.prepTime),
        (recipe.cookTime = +cookTime ?? recipe.cookTime),
        (recipe.notes = notes ?? recipe.notes),
        (recipe.image = image ?? recipe.image),
        await recipe.save();
      res.json({ success: true, recipeId: recipe.recipeId });
    }
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
    const recipe = await Recipe.findByPk(recipeId, {
      include: Favorite,
    });
    if (recipe) {
      res.json(recipe);
    } else {
      console.log("error");
    }
  },
  //view all recipes
  allRecipes: async (req, res) => {
    const recipes = await Recipe.findAll({
      include: Favorite,
    });
    if (recipes) {
      res.send(recipes);
    }
  },
  //view only your recipes
  myRecipes: async (req, res) => {
    const recipes = await Recipe.findAll({
      where: { userId: req.session.userId },
    });

    // 'recipes' is an array of Recipe objects
    // 'favoriteRecipes' is an array of Favorite objects
    // to access each Recipe object from a Favorite object (eager loaded include: Recipe):
    //  favoriteRecipes.recipes

    res.send({
      myRecipes: recipes,
    });
  },

  myFavRecipes: async (req, res) => {
    const favoriteRecipes = await Favorite.findAll({
      where: {
        userId: req.session.userId,
      },
      include: Recipe,
    });

    // 'recipes' is an array of Recipe objects
    // 'favoriteRecipes' is an array of Favorite objects
    // to access each Recipe object from a Favorite object (eager loaded include: Recipe):
    //  favoriteRecipes.recipes

    res.send({
      favRecipes: favoriteRecipes,
    });
  },
  favoriteRecipe: async (req, res) => {
    const { recipeId } = req.params;
    const { userId } = req.session;

    await Favorite.create({
      userId: userId,
      recipeId: recipeId,
    });
    const recipe = await Recipe.findByPk(recipeId);
    if (recipe) res.json({ success: true });
  },
  unfavoriteRecipe: async (req, res) => {
    const { recipeId } = req.params;
    const { userId } = req.session;
    const favorited = await Favorite.findOne({
      where: { recipeId: recipeId, userId: userId },
    });
    await favorited.destroy();
    res.json({ success: true });
  },
};
export default recipeFunctions;
