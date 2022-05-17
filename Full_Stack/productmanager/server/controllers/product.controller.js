// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const Product = require("../models/product.model");

// FIND ALL PRODUCTS
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ results: allProducts });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// CREATE A NINJA
module.exports.createProduct = (req, res) => {
    //req.body represents form information
    Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.json({ results: newlyCreatedProduct });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// FIND ONE NINJA
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((foundProduct) => {
            res.json({ results: foundProduct });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// UPDATE A NINJA
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id }, // specify which NINJA to update
        req.body, // specify the form information to update the NINJA with
        { new: true, runValidators: true }
    )
        .then((updatedProduct) => {
            res.json({ results: updatedProduct });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};

// DELETE A NINJA
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deletedProduct) => {
            res.json({ results: deletedProduct });
        })
        .catch((err) => {
            res.json({ msg: "Something went wrong", error: err });
        });
};
