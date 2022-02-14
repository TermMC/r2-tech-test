const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

test("/api", async () => {
  const { body } = await request.get("/api").expect(200);
  expect(body.message).toBe("ok");
});

describe("GET /api/recipes", () => {
  test("200:should respond with an array of recipe objects", () => {
    ingredientArray = [{ name: expect.any(String), grams: expect.any(Number) }];

    recipeObject = {
      id: expect.any(String),
      imageUrl: expect.any(String),
      instructions: expect.any(String),
      ingredients: expect.arrayContaining(ingredientArray),
    };
    return request
      .get("/api/recipes")
      .expect(200)
      .then((res) => {
        expect(res.body.recipes.length).not.toBe(0);
        res.body.recipes.forEach((recipe) =>
          expect(recipe).toEqual(expect.objectContaining(recipeObject))
        );
      });
  });
  test("200:should respond with a filtered array of recipe objects when  single exclude_ingredient query passed", () => {
    ingredientArray = [{ name: expect.any(String), grams: expect.any(Number) }];
    filteredIngredientArray = [{ name: "kale", grams: expect.any(Number) }];

    filteredRecipeObject = {
      id: expect.any(String),
      imageUrl: expect.any(String),
      instructions: expect.any(String),
      ingredients:
        expect.arrayContaining(ingredientArray) &&
        expect.not.arrayContaining(filteredIngredientArray),
    };

    return request
      .get("/api/recipes?exclude_ingredients=kale")
      .expect(200)
      .then((res) => {
        expect(res.body.recipes.length).not.toBe(0);
        res.body.recipes.forEach((recipe) =>
          expect(recipe).toEqual(expect.objectContaining(filteredRecipeObject))
        );
      });
  });
});
