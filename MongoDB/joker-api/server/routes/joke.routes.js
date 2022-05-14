// ROUTE IS CONNECTED TO THE CONTROLLER
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/hello", JokeController.sayHello);
  app.get("/api/jokes", JokeController.findAllJokes); // FIND ALL JOKES
  app.post("/api/jokes", JokeController.createJoke); // CREATE A JOKE
  app.get("/api/jokes/:id", JokeController.findOneJoke); // FIND ONE JOKE
  app.put("/api/jokes/:id", JokeController.updateJoke); // UPDATE A JOKE
  app.delete("/api/jokes/:id", JokeController.deleteJoke); // DELETE A JOKE
};
