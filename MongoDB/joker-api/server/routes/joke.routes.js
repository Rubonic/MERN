// ROUTE IS CONNECTED TO THE CONTROLLER
const JokeController = require("../controllers/joke.controller"); 

module.exports = (app)=>{
    app.get("/api/hello", JokeController.sayHello);
    app.get("/api/jokes", JokeController.findAllJokes); // FIND ALL QUOTES
    app.post("/api/jokes", JokeController.createJoke); // CREATE A QUOTE
    app.get("/api/jokes/:id", JokeController.findOneJoke);// FIND ONE QUOTE
    app.put("/api/jokes/:id", JokeController.updateJoke);// UPDATE A QUOTE
    app.delete("/api/jokes/:id", JokeController.deleteJoke);// DELETE A QUOTE
}