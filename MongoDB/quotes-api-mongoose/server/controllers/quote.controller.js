// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const JOKE = require("../models/JOKE.model");

module.exports.sayHello = (req, res) => {
  res.json({ msg: "JOKEs api" });
};

// FIND ALL JOKES
module.exports.findAllJOKEs = (req, res) => {
  JOKE.find()
    .then((allJOKEs) => {
      res.json({ results: allJOKEs });
    })
    .catch((err) => {
      res.json({ msg: "Something went wrong", error: err });
    });
};

// CREATE A JOKE
module.exports.createJOKE = (req, res) => {
  //req.body represents form information
  JOKE.create(req.body)
    .then((newlyCreatedJOKE) => {
      res.json({ results: newlyCreatedJOKE });
    })
    .catch((err) => {
      res.json({ msg: "Something went wrong", error: err });
    });
};

// FIND ONE JOKE
module.exports.findOneJOKE = (req, res) => {
  JOKE.findOne({ _id: req.params.id })
    .then((foundJOKE) => {
      res.json({ results: foundJOKE });
    })
    .catch((err) => {
      res.json({ msg: "Something went wrong", error: err });
    });
};

// UPDATE A JOKE
module.exports.updateJOKE = (req, res) => {
  JOKE.findOneAndUpdate(
    { _id: req.params.id }, // specify which JOKE to update
    req.body, // specify the form information to update the JOKE with
    { new: true, runValidators: true }
  )
    .then((updatedJOKE) => {
      res.json({ results: updatedJOKE });
    })
    .catch((err) => {
      res.json({ msg: "Something went wrong", error: err });
    });
};

// DELETE A JOKE
module.exports.deleteJOKE = (req, res) => {
  JOKE.deleteOne({ _id: req.params.id })
    .then((deletedJOKE) => {
      res.json({ results: deletedJOKE });
    })
    .catch((err) => {
      res.json({ msg: "Something went wrong", error: err });
    });
};
