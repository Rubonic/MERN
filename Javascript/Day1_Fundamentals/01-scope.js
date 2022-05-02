var beatles = ['Paul', 'George', 'John', 'Ringo']; //globally scoped because beatles is declared inside this file but not inside of any function


// functions will create their own scope if something is declared inside of a function, it is only available inside that function
// function test() {
//     console.log(beatles)
// }

// loops also create their own scope = block scoped unless you declare the variable using "var" to declare the variable inside of a loop/conditional, it will actually be available outside the loop/conditional as well



function printNames(names) {

    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];

            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}



printNames(beatles);



// Difference between Var vs Let vs Const

/*

var is limited only by the functional scope
let is limited by functional scope AND block scope (loops and conditionals)
const behaves just like let when it comes to scoping

const is used to declare variable that you don't want any other part of the code to reassign that variable

*/