const express = require("express"); // import express so we can use express features
const app = express(); //create our app variable which is an instance of express
const port = 8000;

// NEED THIS TO HANDLE POST REQUESTS!!! HAVE THESE 2 LINES BEFORE THE ROUTES
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({ extended: true })); // lets our app parse form information

// FAKE DATA HERE
let JOKEs = [
  {
    content:
      "It is not the mountains ahead that will wear you out, it is the pebble in your shoe",
    author: "Muhammad Ali",
  },
  { content: "A wise man once said nothing at all", author: "Wes" },
  { content: "Comparison is a thief of joy", author: "Theodore Roosevelt" },
  { content: "Fall down 7 times stand up 8", author: "Japanese Proverb" },
  { content: "You Attract what you vibrate", author: "Fritz" },
  { content: "Wherever you go, there you are", author: "Eckhart Tolle" },
  {
    content:
      "Success is the ability to go from one failure to the next, with no loss of enthusiasm",
    author: "Winston Churchill",
  },
  {
    content: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  { content: "The power of three will set you free", author: "Charmed Ones" },
];

/////////////////////////////////////////////////// ROUTES://////////////////////////////////////////////////////

//CREATE OUR API ENDPOINTS HERE: eg-> http://localhost:8000/api/hello
app.get("/api/hello", (req, res) => {
  res.json({ msg: "hi" });
});

// GET ALL JOKES ENDPOINT
app.get("/api/JOKEs", (req, res) => {
  res.json({ count: JOKEs.length, results: JOKEs });
});

// GET ONE JOKE BASED ON INDEX NUMBER
app.get("/api/JOKEs/:idx", (req, res) => {
  res.json({ results: JOKEs[req.params.idx] });
});

// CREATE A NEW JOKE
app.post("/api/JOKEs", (req, res) => {
  console.log("req.body is this-->", req.body); // req.body is the form information that was submitted (the new JOKE object)
  JOKEs.push(req.body);
  res.json({ count: JOKEs.length, results: JOKEs });
});

// UPDATE A JOKE BASED ON THE INDEX NUMBER
app.put("/api/JOKEs/:idx", (req, res) => {
  JOKEs[req.params.idx] = req.body; // update the JOKE array at specific index with the information from the form (form info is req.body)
  res.json({ count: JOKEs.length, results: JOKEs });
});

// DELETE A JOKE BASED ON THE INDEX NUMBER
app.delete("/api/JOKEs/:idx", (req, res) => {
  // we can get this `id` variable from req.params
  const idx = req.params.idx;
  JOKEs.splice(idx, 1); // splice removes a value at a specified index
  res.json({ count: JOKEs.length, results: JOKEs });
});

//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, () => console.log(`Listening on port ${port}`));
