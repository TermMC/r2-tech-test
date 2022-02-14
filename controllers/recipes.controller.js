const { fetchRecipes } = require("../models/recipes.models");

exports.getRecipes = (req, res, next) => {
  fetchRecipes()
    .then((recipes) => res.status(200).send({ recipes }))
    .catch((err) => next(err));
};
