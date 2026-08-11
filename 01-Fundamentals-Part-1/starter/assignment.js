/*
let country = "India";
let continent = "Asia";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

let language = "Hindi";
const birthYear = 1997;

language = "Hindi";
console.log(language);

// birthYear = 1997;
console.log(birthYear);
*/

/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// let BMIMark = 78 / (1.69 * 1.69);  // These both are not supported in udemy practice code editor.
// let BMIJohn = 92 / (1.95 * 1.95);

let BMIMark = 78 / 1.69 ** 2;
let BMIJohn = 92 / 1.95 ** 2;

console.log(BMIMark, BMIJohn);

let markHigherBMI = true;
console.log(markHigherBMI);
*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// Template Literals...
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
*/

// If / Else statements assignments...
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

// strings and template literals...

// Using the + operator to concatenate these strings.
// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// Using template literals to concatenate these strings.
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMark})!`);
}
*/

// Coding exercise 3: Challenge #3
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (96 + 108 + 89) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolpins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}
*/

// BONUS 1
/*
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolpins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy 😭");
}
*/

// Switch statement assignment
/*
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/

// Coding Exercise 4: Challenge #4

// These are the value of bill.
const bill = 275;
// const bill = 40;
// const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);
