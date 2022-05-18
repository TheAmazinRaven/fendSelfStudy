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