// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const Ninja = require("../models/ninja.model");

// FIND ALL NINJAS
module.exports.findAllNinjas = (req, res) => {
    Ninja.find()
        .then((allNinjas) => {
            res.json({ results: allNinjas });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// CREATE A NINJA
module.exports.createNinja = (req, res) => {
    //req.body represents form information
    Ninja.create(req.body)
        .then((newlyCreatedNinja) => {
            res.json({ results: newlyCreatedNinja });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// FIND ONE NINJA
module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.id })
        .then((foundNinja) => {
            res.json({ results: foundNinja });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// UPDATE A NINJA
module.exports.updateNinja = (req, res) => {
    Ninja.findOneAndUpdate(
        { _id: req.params.id }, // specify which NINJA to update
        req.body, // specify the form information to update the NINJA with
        { new: true, runValidators: true }
    )
        .then((updatedNinja) => {
            res.json({ results: updatedNinja });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// DELETE A NINJA
module.exports.deleteNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then((deletedNinja) => {
            res.json({ results: deletedNinja });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};
