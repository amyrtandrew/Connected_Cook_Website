import { DataTypes, Model } from "sequelize";
import util from "util";
import connectToDB from "./db.js";

export const db = await connectToDB("postgresql:///conscious_cook");

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_recipes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    favorite: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

export class UserRecipe extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

UserRecipe.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "userRecipe",
    sequelize: db,
  }
);

export class Recipe extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Recipe.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    recipe_food: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    favorite: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "recipe",
    sequelize: db,
  }
);

export class Favorite extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Favorite.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "favorite",
    sequelize: db,
  }
);

export class RecipeFood extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

RecipeFood.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "recipeFood",
    sequelize: db,
  }
);

export class FoodItem extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

FoodItem.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    food_name: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    recipe_food: {
      type: DataTypes.INTEGER,
    },
    food_name: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "recipeFood",
    sequelize: db,
  }
);

export class Category extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    appetizer: {
      type: DataTypes.STRING,
    },
    breakfast: {
      type: DataTypes.STRING,
    },
    lunch: {
      type: DataTypes.STRING,
    },
    dinner: {
      type: DataTypes.STRING,
    },
    dessert: {
      type: DataTypes.STRING,
    },
    other: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "category",
    sequelize: db,
  }
);

Category.hasMany(Recipe, { foreignKey: "category_id" });
Recipe.belongsTo(Category, { foreignKey: "category_id" });

Recipe.belongsToMany(FoodItem, { through: "RecipeFood" });
FoodItem.belongsToMany(Recipe, { through: "RecipeFood" });

Recipe.belongsToMany(User, { through: "UserRecipe" });
User.belongsToMany(Recipe, { through: "UserRecipe" });

Recipe.belongsToMany(User, { through: "Favorite" });
User.belongsToMany(Recipe, { through: "Favorite" });
