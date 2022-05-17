// ROUTE IS CONNECTED TO THE CONTROLLER
const NinjaController = require("../controllers/ninja.controller");

module.exports = (app) => {
    app.get("/api/ninjas", NinjaController.findAllNinjas); // FIND ALL NINJAS
    app.post("/api/ninjas", NinjaController.createNinja); // CREATE A NINJA
    app.get("/api/ninjas/:id", NinjaController.findOneNinja); // FIND ONE NINJA
    app.put("/api/ninjas/:id", NinjaController.updateNinja); // UPDATE A NINJA
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja); // DELETE A NINJA
};