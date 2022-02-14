const { fetchRecipes } = require("../models/recipes.models");

exports.getRecipes = (req, res, next) => {
  fetchRecipes().then((res) => console.log(" i fetched this:", res));
};
