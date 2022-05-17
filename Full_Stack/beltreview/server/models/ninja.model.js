// PURPOSE OF THIS FILE IS TO DESCRIBE HOW OUR JOKES TABLE (COLLECTION) SHOULD LOOK LIKE
const mongoose = require('mongoose');

// INSTRUCTIONS FOR WHAT THE JOKES TABLE SHOULD LOOK LIKE BELOW
const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "Name must be at least 5 characters long"]
    },
    numProjects: {
        type: Number,
        required: [true, "Author is required"],
        min: [0, "You can not have less than 0 projects"],
    },
    gradDate: {
        type: Date,
        required: [true, "Date is required"],
        min: ['2012-01-01', "Dane can't be before 2012"] // Date Validation
    },
    // IF YOU WANT A OPTIONAL FIELD, YOU DON'T NEED THE REQUIRED PART; JUST THE TYPE
    isVeteran: {
        type: Boolean,
        required: [true, "Date is required"]
    }
},{timestamps: true});


const Ninja = mongoose.model("Ninja", NinjaSchema)

module.exports = Ninja;