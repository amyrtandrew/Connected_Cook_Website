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
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    modelName: "user",
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
    recipeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prepTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cookTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // image: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    // },
  },
  {
    modelName: "recipe",
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
    foodId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    foodName: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    calories: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "foodItem",
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
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
  },
  {
    modelName: "category",
    sequelize: db,
  }
);

Category.hasMany(Recipe, { foreignKey: "categoryId" });
Recipe.belongsTo(Category, { foreignKey: "categoryId" });

Recipe.belongsToMany(FoodItem, { through: "recipe_foods" });
FoodItem.belongsToMany(Recipe, { through: "recipe_foods" });

// one-many rel where a user can 'own' a recipe
User.hasMany(Recipe, { foreignKey: "userId" });
Recipe.belongsTo(User, { foreignKey: "userId" });
// User.addRecipe()

// many-many rel between users & recipes
Recipe.belongsToMany(User, { through: "favorites" });
User.belongsToMany(Recipe, { through: "favorites" });
// Recipe.addUser()
