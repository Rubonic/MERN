// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const Pet = require("../models/pet.model");

// FIND ALL PETS
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then((allPets) => {
            res.json({ results: allPets });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// CREATE A PET
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then((newlyCreatedPet) => {
            res.json({ results: newlyCreatedPet });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// FIND ONE PET
module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then((foundPet) => {
            res.json({ results: foundPet });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// UPDATE A PET
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id }, // SPECIFY WHICH PET TO UPDATE
        req.body, // SPECIFY THE FORM INFORMATION TO UPDATE THE PET WITH
        { new: true, runValidators: true }
    )
        .then((updatedPet) => {
            res.json({ results: updatedPet });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// DELETE A PET
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then((deletedPet) => {
            res.json({ results: deletedPet });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};
