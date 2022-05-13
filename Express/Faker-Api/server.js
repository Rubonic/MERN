const express = require("express"); // import express so we can use express features
const { faker } = require('@faker-js/faker'); // import faker library
const app = express(); //create our app variable which is an instance of express
const port = 8000;


//CREATE OUR API ENDPOINTS HERE: eg-> http://localhost:8000/api/hello
// app.get("/api/hello", (req, res)=>{
//     res.json({msg: "hi faker"});
// })

//#################-CLASSES-#################################//

//-----------------USER CLASS---------------------------------//

class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
    }
}
console.log(new User());

//-----------------COMPANY CLASS---------------------------------//
class Company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.findName = faker.name.findName();
        this.streetAddress = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
console.log(new Company());

//#################-ROUTES-#################################//

//-----------------NEW USER ROUTE-----------------------------//

app.get("/api/users/new", (req, res)=>{
    let user = new User();
    res.json({results: user});
})


//-----------------NEW COMPANY ROUTE-----------------------------//
app.get("/api/company/new", (req, res)=>{
    // create a user
    let company = new Company();
    //respond with json
    res.json({results: company})
})

//-----------------NEW USER/COMPANY-----------------------------//
app.get("/api/user/company", (req, res)=>{
    let user = new User();
    let company = new Company();
    res.json({results: {user: user, company: company}})
})



//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));