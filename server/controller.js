let TEST_DATA = [
  {
    id: 0,
    name: "Content plan",
    category: "lunch",
    prepTime: 4,
    cookTime: 5,
    servings: 1,
    ingredients: "butter",
    instructions: "bake",
    notes: "do not burn",
  },
  {
    id: 1,
    name: "Content plan",
    category: "dinner",
    prepTime: 4,
    cookTime: 5,
    servings: 1,
    ingredients: "butter",
    instructions: "bake",
    notes: "do not burn",
  },
  {
    id: 2,
    name: "Content plan",
    category: "breakfast",
    prepTime: 4,
    cookTime: 5,
    servings: 1,
    ingredients: "butter",
    instructions: "bake",
    notes: "do not burn",
  },
];

let globalId = 3;
const handlerFunctions = {
  getRecipe: (req, res) => {
    res.send(TEST_DATA);
  },
  addRecipe: (req, res) => {
    const {
      name,
      category,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
    } = req.body;

    const newObj = {
      id: globalId,
      name: name,
      category: category,
      prepTime: "",
      cookTime: "",
      servings: "",
      ingredients: "",
      instructions: "",
      notes: "",
      isEditing: true,
    };

    TEST_DATA.push(newObj);

    globalId++;

    res.send(newObj);
  },

  deleteRecipe: (req, res) => {
    const id = req.params.id;

    TEST_DATA = TEST_DATA.filter((recipe) => recipe.id !== +id);
    res.send(TEST_DATA);
  },

  editRecipe: (req, res) => {
    const { id } = req.params;
    const {
      name,
      category,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
    } = req.body;

    const index = TEST_DATA.findIndex((recipe) => recipe.id === +id);
    const recipeInfo = TEST_DATA[index];

    recipeInfo.name = name;
    recipeInfo.category = category;
    recipeInfo.prepTime = +prepTime;
    recipeInfo.cookTime = +cookTime;
    recipeInfo.servings = +servings;
    recipeInfo.ingredients = ingredients;
    recipeInfo.instructions = instructions;
    recipeInfo.notes = notes;

    res.send(recipeInfo);
  },
};

export default handlerFunctions;
