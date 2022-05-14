// PURPOSE OF THIS FILE IS TO DESCRIBE HOW OUR QUOTES TABLE (COLLECTION) SHOULD LOOK LIKE
const mongoose = require('mongoose');

// INSTRUCTIONS FOR WHAT THE QUOTES TABLE SHOULD LOOK LIKE BELOW
const QuoteSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
        min: [1, "Rating can not be less than 1"],
        max: [10, "Rating can not be more than 10"]
    },
},{timestamps: true});


const Quote = mongoose.model("Quote", QuoteSchema)

module.exports = Quote;