/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
-Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// DATA SET 1

// const BMI = mass / height ** 2;

let markMass1 = 78;
let markHeight1 = 1.69;

let BMIMark = markMass1 / markHeight1 ** 2;

let johnMass1 = 92;
let johnHeight1 = 1.95;

let BMIJohn = johnMass1 / johnHeight1 ** 2;

console.log(BMIMark);
console.log(BMIJohn);

// DATA SET 2

let markMass2 = 95;
let markHeight2 = 1.88;

let BMIMark2 = markMass2 / markHeight2 ** 2;

let johnMass2 = 85;
let johnHeight2 = 1.76;

let BMIJohn2 = johnMass2 / johnHeight2 ** 2;

console.log(BMIMark2);
console.log(BMIJohn2);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

let markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);