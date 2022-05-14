// ROUTE IS CONNECTED TO THE CONTROLLER
const JOKEController = require("../controllers/JOKE.controller");

module.exports = (app) => {
  app.get("/api/hello", JOKEController.sayHello);
  app.get("/api/JOKEs", JOKEController.findAllJOKEs); // FIND ALL JOKES
  app.post("/api/JOKEs", JOKEController.createJOKE); // CREATE A JOKE
  app.get("/api/JOKEs/:id", JOKEController.findOneJOKE); // FIND ONE JOKE
  app.put("/api/JOKEs/:id", JOKEController.updateJOKE); // UPDATE A JOKE
  app.delete("/api/JOKEs/:id", JOKEController.deleteJOKE); // DELETE A JOKE
};
