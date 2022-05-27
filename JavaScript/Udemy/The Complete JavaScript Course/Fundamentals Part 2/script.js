'use strict'; // has to be very first statement in code

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

*/

// const interface = "Audio"; // reserverd words
// const private = 354;

// Functions

/*

function logger () {
    console.log("My name is Raven");
}

logger(); // calling, running, invoking the function
logger();
logger();

function fruitProcessor (apples, oranges) {
    console.log(apples, oranges);
    
    const juice = `Juice with ${apples} apples and ${oranges} organges.`;
    
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

// Function Declarations Vs. Expressions


// Function Declaration

/*
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);


// Function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1993);

console.log(age1, age2);
*/

// Arrow Functions

/*

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Bob"));
console.log(yearsUntilRetirement(1996, "Jonas"));

*/

// Functions Calling other Functions

/*

const fruitCutter = function(fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} organge pieces.`;
    
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

// Reviewing Functions

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} has already retired.`);
    }
}


console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/