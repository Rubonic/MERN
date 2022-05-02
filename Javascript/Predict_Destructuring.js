// Problem 1
// Original Code:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Result Answer:
// Output: Tesla
console.log(randomCar)
// Output: Mercedes
console.log(otherRandomCar)
// ------------------------------------------------------------------------------------------------------
// Problem 2
// Original Code:
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName)

// Result Answer:
// Output: Undefined; due to the fact that 'name' is not defined 
console.log(name);
// Output: Elon 
console.log(otherName)

// ------------------------------------------------------------------------------------------------------
// Problem 3
// Original Code:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// Result Answer:
// Output: 12345
console.log(password);
// Output: Undefined; due to the fact there is no factors that can contribute to 'hashedPassword'
console.log(hashedPassword);

// ------------------------------------------------------------------------------------------------------
// Problem 4
// Original Code:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third)

// Result Answer:
// Output: 5; which will make this statement false
console.log(first == second);
// Output: 2; which will make this statement true
console.log(first == third)

// ------------------------------------------------------------------------------------------------------
// Problem 5
// Original Code:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork)

// Result Answer:
// Output: value
console.log(key);
// Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey);
// Output: 1
console.log(secondKey[0]);
// Output: 5
console.log(willThisWork)