const recipesRouter = require("./recipes.router");

const apiRouter = require("express").Router();

apiRouter.get("/", (_, res) => {
  res.json({ message: "ok" });
});

apiRouter.use("/recipes", recipesRouter);
//TODO

//Set up routing for first endpoint
//respond with list of all recipes
//remind myself how to handle queries
//think about error handling
//this ISNT an SQL database.... should it be?
//NO they state data.json is the DB
// what tests should I be running?

module.exports = apiRouter;
