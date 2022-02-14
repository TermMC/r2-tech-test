const { fetchRecipes } = require("../models/recipes.models");

exports.getRecipes = (req, res, next) => {
  const { exclude_ingredients } = req.query;
  fetchRecipes(exclude_ingredients)
    .then((recipes) => res.status(200).send({ recipes }))
    .catch((err) => next(err));
};
