// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const Author = require("../models/author.model");

// FIND ALL AUTHORS
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ results: allAuthors });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// CREATE A AUTHOR
module.exports.createAuthor = (req, res) => {
    //req.body represents form information
    Author.create(req.body)
        .then((newlyCreatedAuthor) => {
            res.json({ results: newlyCreatedAuthor });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// FIND ONE AUTHOR
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((foundAuthor) => {
            res.json({ results: foundAuthor });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// UPDATE A AUTHOR
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id }, // specify which Author to update
        req.body, // specify the form information to update the NINJA with
        { new: true, runValidators: true }
    )
        .then((updatedAuthor) => {
            res.json({ results: updatedAuthor });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// DELETE A AUTHOR
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((deletedAuthor) => {
            res.json({ results: deletedAuthor });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};