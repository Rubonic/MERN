const mongoose = require('mongoose'); // importing mongoose
const db_name = "author_db"

// MONGOOSE CONNECTION HERE
mongoose.connect(`mongodb+srv://admin:admin@cluster0.mcnl6.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));