// ROUTE IS CONNECTED TO THE CONTROLLER
const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts); // FIND ALL NINJAS
    app.post("/api/products", ProductController.createProduct); // CREATE A NINJA
    app.get("/api/products/:id", ProductController.findOneProduct); // FIND ONE NINJA
    app.put("/api/products/:id", ProductController.updateProduct); // UPDATE A NINJA
    app.delete("/api/products/:id", ProductController.deleteProduct); // DELETE A NINJA
};