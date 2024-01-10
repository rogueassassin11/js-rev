///////////////////////////////////////
// STRICT MODE
"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log(`I can drive.`);
}

// const interface = "Audio";
const private = 534;
*/

///////////////////////////////////////
// FUNCTIONS
/*
function logger() {
  console.log(`My name is Elias.`);
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

///////////////////////////////////////
// FUNCTION DECLARATIONS VS EXPRESSIONS
/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1980);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

///////////////////////////////////////
// ARROW FUNCTION
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} returns in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, `Elias`));
console.log(yearsUntilRetirement(2015, `Chise`));
*/

///////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS

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

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} returns in ${retirement} years`;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Elias"));
console.log(yearsUntilRetirement(1970, "Angelica"));
*/

///////////////////////////////////////
// ARRAYS
// you can mutate a const array because only primitive values are prohibited
/*
const friends = ["Elias", "Chise", "Juuzo"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Arrays are zero-based
console.log(friends[0]);
console.log(friends[2]);

// length of an array
console.log(friends.length);

// to get the last element of an array
console.log(friends[friends.length - 1]);

// adding/changing elements to the array
friends[2] = "Kaburagi";
console.log(friends);

// cannot do this:
// friends = ["Bob", "Alice"];

const firstName = "Jorah";
const jorah = [firstName, "Mormont", 2037 - 1991, "knight", friends];
console.log(jorah);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

// you can place function calls in an array
const ages = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages);
*/

///////////////////////////////////////
// BASIC ARRAY OPERATIONS
/*
const friends = ["Elias", "Chise", "Juuzo"];

//push adds elements to the end of the array
const newLength = friends.push("Kaburagi");
console.log(friends);
console.log(newLength);

// unshift adds element to the beginning
friends.unshift("Jorah");
console.log(friends);

// pop removes the last element
// pop returns the removed element
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

// shift removes the first element
friends.shift();
console.log(friends);

// to get the location in the array
console.log(friends.indexOf("Chise"));

// when indexOf is missing, you get -1
console.log(friends.indexOf("Jorah"));

// ES6 'includes' returns a boolean
// 'includes' is a strict comparison
console.log(friends.includes("Chise"));
console.log(friends.includes("Jorah"));

if (friends.includes("Chise")) {
  console.log(`You have a friend called Chise`);
}
*/

///////////////////////////////////////
// INTRO TO OBJECTS
/*
const jorahArray = [
  "Jorah",
  "Mormont",
  2037 - 1991,
  "Knight",
  ["Daenerys", "Missandei", "Torgo"],
];

const jorah = {
  firstName: "Jorah",
  lastName: "Mormont",
  age: 2037 - 1991,
  job: "Knight",
  friends: ["Daenerys", "Missandei", "Torgo"],
};
*/
