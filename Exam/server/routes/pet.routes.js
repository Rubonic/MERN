// ROUTE IS CONNECTED TO THE CONTROLLER
const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.get("/api/pets", PetController.findAllPets); // FIND ALL PETS
    app.post("/api/pets", PetController.createPet); // CREATE A PET
    app.get("/api/pets/:id", PetController.findOnePet); // FIND ONE PET
    app.put("/api/pets/:id", PetController.updatePet); // UPDATE A PET
    app.delete("/api/pets/:id", PetController.deletePet); // DELETE A PET
};