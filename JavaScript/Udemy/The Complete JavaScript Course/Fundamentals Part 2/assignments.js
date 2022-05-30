/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

'use strict';
/*
function describeCountry(country, population, capitalCity) {
    const desCountry = `${country} has ${population} people and it's capital city is ${capitalCity}.`;
    
    return desCountry;
}

const USA = describeCountry("USA", 579000000, "Washigton DC");
console.log(USA);

const Finland = describeCountry("Finaland", 6000000, "Helsinki");
console.log(Finland);

const Greece = describeCountry("Greece", 108000000, "Athens");
console.log(Greece);
*/

/*

LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)

*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let China = percentageOfWorld1(1439323776);
let India = percentageOfWorld1(1380004385);
let US = percentageOfWorld1(331002651);

console.log(China.toFixed(2));
console.log(India.toFixed(2));
console.log(US.toFixed(2));

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

let China2 = percentageOfWorld2(1439323776);
let India2 = percentageOfWorld2(1380004385);
let US2 = percentageOfWorld2(331002651);

console.log(China2.toFixed(2));
console.log(India2.toFixed(2));
console.log(US2.toFixed(2));

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = population => (population / 7900) * 100;


let China3 = percentageOfWorld3(1439323776);
let India3 = percentageOfWorld3(1380004385);
let US3 = percentageOfWorld3(331002651);

console.log(China3.toFixed(2));
console.log(India3.toFixed(2));
console.log(US3.toFixed(2));