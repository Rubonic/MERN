// ROUTE IS CONNECTED TO THE CONTROLLER
const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors); // FIND ALL AUTHORS
    app.post("/api/authors", AuthorController.createAuthor); // CREATE A AUTHOR
    app.get("/api/authors/:id", AuthorController.findOneAuthor); // FIND ONE AUTHOR
    app.put("/api/authors/:id", AuthorController.updateAuthor); // UPDATE A AUTHOR
    app.delete("/api/authors/:id", AuthorController.deleteAuthor); // DELETE A AUTHOR
};