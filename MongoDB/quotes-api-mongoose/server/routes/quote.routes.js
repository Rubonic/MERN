// ROUTE IS CONNECTED TO THE CONTROLLER
const QuoteController = require("../controllers/quote.controller"); 

module.exports = (app)=>{
    app.get("/api/hello", QuoteController.sayHello);
    app.get("/api/quotes", QuoteController.findAllQuotes); // FIND ALL QUOTES
    app.post("/api/quotes", QuoteController.createQuote); // CREATE A QUOTE
    app.get("/api/quotes/:id", QuoteController.findOneQuote);// FIND ONE QUOTE
    app.put("/api/quotes/:id", QuoteController.updateQuote);// UPDATE A QUOTE
    app.delete("/api/quotes/:id", QuoteController.deleteQuote);// DELETE A QUOTE
}