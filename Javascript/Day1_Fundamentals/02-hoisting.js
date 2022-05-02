// /*
// Hoisting - vars and functions get hoisted to the top of their scope. let and const do not get hoisted

// */


// console.log(goat)


// var goat = "Michael Jordan"

// console.log(goat)



// /*
// var goat;
// console.log(goat)
// goat = "Michael Jordan"




// */

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);

