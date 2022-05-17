// PURPOSE OF THIS FILE IS TO DESCRIBE HOW OUR JOKES TABLE (COLLECTION) SHOULD LOOK LIKE
const mongoose = require('mongoose');

// INSTRUCTIONS FOR WHAT THE JOKES TABLE SHOULD LOOK LIKE BELOW
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Name must be at least 2 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "You can not have less than 0 dollars"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"],
        maxlength: [1000, "Description cannot exceed 1000 characters"]
    }
},{timestamps: true});


const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;