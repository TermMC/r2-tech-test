const express = require("express");
const { getRecipes } = require("../controllers/recipes.controller");

const recipesRouter = express.Router();

recipesRouter.get("/", getRecipes);

module.exports = recipesRouter;
