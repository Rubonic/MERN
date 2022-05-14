// PURPOSE OF THIS FILE IS TO DESCRIBE HOW OUR JOKES TABLE (COLLECTION) SHOULD LOOK LIKE
const mongoose = require("mongoose");

// INSTRUCTIONS FOR WHAT THE JOKES TABLE SHOULD LOOK LIKE BELOW
const JOKESchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [5, "Content must be at least 5 characters long"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      minlength: [2, "Author name must be at least 2 characters"],
    },
    rating: {
      type: Number,
      min: [1, "Rating can not be less than 1"],
      max: [10, "Rating can not be more than 10"],
    },
  },
  { timestamps: true }
);

const JOKE = mongoose.model("JOKE", JOKESchema);

module.exports = JOKE;
