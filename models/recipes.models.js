const fs = require("fs");

exports.fetchRecipes = (exclude_ingredients) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};
