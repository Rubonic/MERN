// IMPORT THE MODEL SO THAT THE CONTROLLER KNOWS HOW TO TALK TO THE DATABASE TO QUERY THE DATABASE
const Quote = require("../models/quote.model");

module.exports.sayHello = (req, res)=>{
    res.json({msg: "quotes api"});
}

// FIND ALL QUOTES
module.exports.findAllQuotes = (req, res) =>{
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// CREATE A QUOTE
module.exports.createQuote = (req, res)=>{
    //req.body represents form information
    Quote.create(req.body)
        .then(newlyCreatedQuote=>{
            res.json({results: newlyCreatedQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// FIND ONE QUOTE
module.exports.findOneQuote = (req, res)=>{
    Quote.findOne({_id: req.params.id})
        .then(foundQuote=>{
            res.json({results: foundQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// UPDATE A QUOTE
module.exports.updateQuote = (req, res)=>{
    Quote.findOneAndUpdate(
        {_id: req.params.id},// specify which quote to update
        req.body, // specify the form information to update the quote with
        {new: true, runValidators: true}
    )
        .then(updatedQuote=>{
            res.json({results: updatedQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

// DELETE A QUOTE
module.exports.deleteQuote = (req, res)=>{
    Quote.deleteOne({_id: req.params.id})
    .then(deletedQuote=>{
        res.json({results: deletedQuote})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}