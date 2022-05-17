const express = require("express"); // import express so we can use express features
const app = express(); //create our app variable which is an instance of express
const port = 8000;
const cors = require("cors"); // import CORS (cross origin resource sharing)



// NEED THIS TO HANDLE POST REQUESTS!!! HAVE THESE 2 LINES BEFORE THE ROUTES
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({extended:true})); // lets our app parse form information
app.use(cors()); // enables CORS  so that we can share resources back and forth between the back-end and front-end

// CONNECTS TO MONGOOSE DATABASE FROM "CONFIG" FOLDER
require("./server/config/mongoose.config");


// ROUTES
// MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/product.routes")(app);




//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));