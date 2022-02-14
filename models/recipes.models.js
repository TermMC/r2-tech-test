const fs = require("fs");

exports.fetchRecipes = async () => {
  let recipes = fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Error ", err);
      //error handling code 500
    } else {
      console.log("i got", data);
      //   console.log(recipes);
      return data;
    }
  });

  return recipes;
};
