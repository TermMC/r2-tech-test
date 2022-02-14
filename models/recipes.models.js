const fs = require("fs");

exports.fetchRecipes = (exclude_ingredients) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let recipeData = JSON.parse(data);
        if (exclude_ingredients) {
          const exclusionArray = exclude_ingredients.split(",");

          let filteredRecipes = recipeData.filter((recipe) => {
            let containsExcludedIngredient = false;
            exclusionArray.forEach((excludedItem) => {
              if (
                recipe.ingredients.find((ingredient) =>
                  Object.values(ingredient).includes(excludedItem)
                )
              ) {
                containsExcludedIngredient = true;
              }
            });
            return !containsExcludedIngredient;
          });
          resolve(filteredRecipes);
        } else {
          resolve(recipeData);
        }
      }
    });
  });
};
