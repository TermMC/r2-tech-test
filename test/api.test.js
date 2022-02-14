const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

ingredientArray = [{ name: expect.any(String), grams: expect.any(Number) }];

recipeObject = {
  id: expect.any(String),
  imageUrl: expect.any(String),
  instructions: expect.any(String),
  ingredients: expect.arrayContaining(ingredientArray),
};

test("/api", async () => {
  const { body } = await request.get("/api").expect(200);
  expect(body.message).toBe("ok");
});

describe("GET /api/recipes", () => {
  test("200:should respond with an array of recipe objects", () => {
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
});
