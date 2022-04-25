// Introduction

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Variables & Assignments

console.log("Raven");
console.log(28);

let firstName = "Tarrylon";
let age = 27;
console.log(firstName);
console.log(age);

let myFirstJob = "Grocery Store"; // use descriptive variable names.
let myCurrentJob = "Help Desk";

console.log("test");

// Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Raven");

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(year);
console.log(typeof year);

console.log(typeof null);

/* Let, const, var

let is for variables that can change later.

const is for variables that are not supposed to change at any point in the future.

var is for the old way of defining variables & should be avoided.
*/

let age2 = 30;
age2 = 31; // Variable has been mutated

const birthYear = 1993;
// birthYear = 1990; - can't do this, it's immutable; cannot declare empty  const variables

// Basic operators

const now = 2037;
const ageRaven = now - 1993;
const ageTarrylon = now - 1994;
console.log(ageRaven, ageTarrylon);

console.log(ageRaven * 2, ageRaven / 10, 2 ** 3);
// 2 ** 3 means to to the power of 3 = 2 * 2 * 2

const firstName2 = "Raven";
const lastName2 = "Dickerson";
console.log(firstName2 + " " + lastName2);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison Operators
console.log(ageRaven > ageTarrylon); // >, <, >=, <=
console.log(ageTarrylon >= 18);

const isFullAge = ageTarrylon >= 18;

console.log(now - 1991 > now - 2019);

// Operator Precedence

// MDN has a great chart that explains operator precedence

console.log(25 - 10 - 5);
// let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ((ageRaven + ageTarrylon) / 2);
console.log(ageRaven, ageTarrylon, averageAge);

// Strings & Template Literals

const firstName3 = "Raven";
const job = "Software Engineer";
const birthYear2 = 1993;
const year2 = 2021;

const raven = "I'm " + firstName3 + ", a " + (year2 - birthYear2) + " year old " + job + "!";
console.log(raven);

const ravenNew = `I'm ${firstName3}, a ${year2 - birthYear2} year old ${job}!`;
console.log(ravenNew);

console.log("String with \n\
multiple \n\
lines.");

console.log(`String with
multiple
lines.`);

// Taking Decisions if/else statements

// Write a program to check whether someone can get their driver's license.
const age3 = 15;

if (age3 >= 18) {
    console.log("You are old enough! 🚗");
} else {
    console.log("You are not old enough! 😥");
    const yearsLeft = 18 - age3;
    console.log(`You are too young and have ${yearsLeft} years left! 🤗`);
}

// Century person was born
const birthYear3 = 1993;
let century;

if (birthYear3 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);