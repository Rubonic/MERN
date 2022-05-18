// PURPOSE OF THIS FILE IS TO DESCRIBE HOW OUR JOKES TABLE (COLLECTION) SHOULD LOOK LIKE
const mongoose = require('mongoose');

// INSTRUCTIONS FOR WHAT THE JOKES TABLE SHOULD LOOK LIKE BELOW
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long!"]
    }
},{timestamps: true});


const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;