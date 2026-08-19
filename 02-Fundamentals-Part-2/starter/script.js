'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;
*/

// Functions
/*
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Function declaration
function calcAge1(birthYear) {
  // function declaration can be defined later as below. You can call a function declaration before you define it but it not such a good idea in many cases but you can do it if necessary.
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// This is an example of function expression which we cannot define later like function declaration.
// Function expression cannot be define later like as below. And internally this happens because of a process called hoisting.
const age3 = calcAge3(1991); // Like you cannot define it like this in expression.

const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(age3);
