// Challenge 1
// Learning Platform Code:
console.log(hello);                                   
var hello = 'world';                                 


// Hoisted Code:
console.log(hello);
let hello = 'world';

// -------------------------------------------------------------------------------------------------------------------------
// Challenge 2
// Learning Platform Code:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Hoisted Code:
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle)
}

// -------------------------------------------------------------------------------------------------------------------------
// Challenge 3
// Learning Platform Code:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Hoisted Code:
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);

// -------------------------------------------------------------------------------------------------------------------------
// Challenge 4
// Learning Platform Code:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Hoisted Code:
let food = 'chicken';
console.log(food);
eat();
function eat();
    food = 'half-chicken';
    console.log(food);
    let food = 'gone'

// -------------------------------------------------------------------------------------------------------------------------
// Challenge 5
// Learning Platform Code:
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Hoisted Code:
let mean();
mean = function();{
    let food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
} 
console.log(food);

// -------------------------------------------------------------------------------------------------------------------------
// Challenge 6
// Learning Platform Code:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// Hoisted Code:
let genre;
function rewind {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "rock"
rewind();
console.log(genre);

// -------------------------------------------------------------------------------------------------------------------------
// Challenge 7
// Learning Platform Code:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Hoisted Code:
function learn() {
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
