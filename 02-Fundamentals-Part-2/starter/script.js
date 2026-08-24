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

/*
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
*/

/*
// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Can we use arrow function all the time, the answer is no because it's the fact that arrow functions do not get a so-called (this) keyword.

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
// Another method to find the retirement age.
const yearsUntilRetirement = (birthYear, retirementAge = 65) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const yearsLeft = retirementAge - age;

  return Math.max(yearsLeft, 0);
};

console.log(yearsUntilRetirement(1991));
*/

// Functions Calling Other Functions

// const fruitProcessor = (apples, oranges) => {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;       // Tried the below function as an arrow function to see how it works
//   return juice;
// };
// console.log(fruitProcessor(5, 3));

// This is called functions calling other functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
