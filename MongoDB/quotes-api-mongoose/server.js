const express = require("express"); // import express so we can use express features
const app = express(); //create our app variable which is an instance of express
const port = 8000;

// NEED THIS TO HANDLE POST REQUESTS!!! HAVE THESE 2 LINES BEFORE THE ROUTES
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({ extended: true })); // lets our app parse form information

// CONNECTS TO MONGOOSE DATABASE IN "CONFIG" FOLDER
require("./server/config/mongoose.config");

// ROUTES
// MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/JOKE.routes")(app);

//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, () => console.log(`Listening on port ${port}`));
