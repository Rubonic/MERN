// PURPOSE OF THIS FILE IS TO DESCRIBE HOW OUR JOKES TABLE (COLLECTION) SHOULD LOOK LIKE
const mongoose = require('mongoose');

// INSTRUCTIONS FOR WHAT THE JOKES TABLE SHOULD LOOK LIKE BELOW
const JokeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [5, "Content must be at least 5 characters long"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [2, "Author name must be at least 2 characters"]
    },
},{timestamps: true});


const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke;