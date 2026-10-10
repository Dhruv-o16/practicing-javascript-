'use strict';

// Functions Practice.
/*
// Function decelaration
function calcAge1(birthYear) {
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

// Arrow function - single line code arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Multiple-line arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;     This one is first method.
  // second is below.
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

// Functions Calling Other Functions
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

// Reviewing Functions
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

// Function Coding Exercise: Challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// Practicing Functions...
/*
// Temperature Converter script:
// Function to convert Celsius to Fahrenheit
function celsiusFahrenheit(celsius) {
  let fehrenheit = (celsius * 9) / 5 + 32;
  return fehrenheit;
}

// Function to evaluate the weather message based on Fahrenheit
function getWeatherMessage(fehrenheit) {
  if (fehrenheit > 85) {
    return "It's a hot day! ☀️";
  } else if (fehrenheit < 50) {
    return "It's a bit chilly! 🧥";
  } else {
    return 'The weather is lovely! 😊';
  }
}

// Testing the function together
let currentTempC = 28;

// Call the first function to convert the temperature
let convertedF = celsiusFahrenheit(currentTempC);

// Pass that result into the second function
let advice = getWeatherMessage(convertedF);

// Print the final output to the console
console.log('Temperature in Celsius: ' + currentTempC + '°C');
console.log('Temperature in Fehrenheit: ' + '°F');
console.log(advice);
*/

// Function revision...
/*
function logger() {
  console.log('My name is Jonas!');
}

logger();

// Functions can receive input data (parameters) and return output data. And the simplest form of a function is a function declaration as below.

function vegetableProcessor(carrots, beetroots) {
  console.log(carrots, beetroots);
  const juice = `Juice with ${carrots} carrots and ${beetroots} beetroots.`;
  return juice;
}

// Using the function with arguments 5 and 0
const carrotJuice = vegetableProcessor(5, 0);
console.log(carrotJuice);

// Reusing the function with different inputs
const carrotBeetrootJuice = vegetableProcessor(2, 4);
console.log(carrotBeetrootJuice);

// Functions helps us write DRY code (Don't Repeat Yourself), which is an important clean code principle.

// Functions Declarations vs. Expressions.

// Functions Declaration: It can be called before they're defined in the code.
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression: It cannot be called before they're defined in the code.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2); // Both produce the same result

// Arrow function with one parameter and implicit return.
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Arrow function with multiple parameters and multiple lines of code.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
*/

// Functions Calling Other Functions...
/*
// Function to cut fruit into pieces.
const cutPieces = function (fruit) {
  return fruit * 4;
};

// Function that uses the cutPieces function
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
*/

// Reviewing Functions...
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement >= 0) {
    return `${firstName} retires in ${retirement} years!`;
  } else {
    return `${firstName} is already retired 🎉`;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1969, 'Mark'));
*/

// Practicing Functions with Arrays...
// Function Declaration...
/*
function calcTip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// Function Expression...
/*
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[0] + tips[0], bills[0] + tips[0]];
console.log(bills, tips, totals);
*/

// Arrow Function...
/*
const calcTip = bills =>
  bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[0] + tips[0], bills[1] + tips[2]];
console.log(bills, tips, totals);
*/

/* 
// Coding Challenge #3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`,
  );
}
*/

// Coding exercise: Challenge #4
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log('bills:', bills);
console.log('tips:', tips);
console.log('totals:', totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

/*
// JavaScript function that handles reversing strings, numbers, arrays, and general values:
function reverse(value) {
  if (value === null || value === undefined) {
    return value;
  }

  // Handle Strings
  if (typeof value === 'string') {
    return value.split('').reverse().join('');
  }

  // Handle Numbers (preserves sign)
  if (typeof value === 'number') {
    const reversedNum = parseFloat(
      Math.abs(value).toString().split('').reverse().join(''),
    );
    return Math.sign(value) * reversedNum;
  }

  // Handle Arrays
  if (Array.isArray(value)) {
    return [...value].reverse(); // Returns a new array without mutating the original
  }

  // Handle Objects (reverse key-value pair order)
  if (typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).reverse());
  }

  return value;
}

console.log(reverse('Hello'));
console.log(reverse(-12345));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse({ a: 1, b: 2 }));
*/

// Debugging with the console and Breakpoints...
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.log(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
*/

// Challenge #1
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}˚C ...${data1[1]}˚C ...${data1[2]}˚C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}˚C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
*/

// Coding Challenge #2 with AI ChatGPT
/*
function analyzeWorkWeek(hours) {
  const totalHours = hours.reduce((sum, day) => sum + day, 0);

  const averageDailyHours = Number((totalHours / hours.length).toFixed(1));

  const mostHours = Math.max(...hours);
  const mostWorkedDay = hours.indexOf(mostHours);

  const daysWorked = hours.filter(day => day > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    mostWorkedDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);
*/

// Claude Code
/*
const DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function analyzeWorkWeek(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length === 0) {
    throw new Error('dailyHours must be a non-empty array of numbers');
  }

  const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

  const averageDailyHours =
    Math.round((totalHours / dailyHours.length) * 10) / 10;

  const maxHours = Math.max(...dailyHours);
  const maxIndex = dailyHours.indexOf(maxHours);

  const daysWorked = dailyHours.filter(h => h > 0).length;

  return {
    totalHours,
    averageDailyHours,
    busiestDay: maxHours > 0 ? DAY_NAMES[maxIndex] : null,
    daysWorked,
    isFullTime: totalHours >= 35,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);
*/

// Practicing JavaScript Fundamental Part 2...
// Functions: Function declaration, function expression, arrow function and Functions calling other Functions
/*
function logger() {
  console.log('My name is Jonas!');
}

logger();
logger();
*/

/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Function Declaration:
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
*/

// Function Expression:
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// This will work
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(age1);

// This would cause an error if placed before the function expression
const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
*/

// Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years!`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
