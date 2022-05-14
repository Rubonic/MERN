// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const Joke = require("../models/joke.model");

module.exports.sayHello = (req, res)=>{
    res.json({msg: "jokes api"});
}

// FIND ALL QUOTES
module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// CREATE A QUOTE
module.exports.createJoke = (req, res)=>{
    //req.body represents form information
    Joke.create(req.body)
        .then(newlyCreatedJoke=>{
            res.json({results: newlyCreatedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// FIND ONE QUOTE
module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id})
        .then(foundJoke=>{
            res.json({results: foundJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// UPDATE A QUOTE
module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},// specify which quote to update
        req.body, // specify the form information to update the quote with
        {new: true, runValidators: true}
    )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// DELETE A QUOTE
module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke=>{
        res.json({results: deletedJoke})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}