////////////////////////////////////////
// VARIABLES
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Elias");
console.log("11");

let firstName = "Elias";
console.log(firstName);

//variables cannot start with a number, only numbers, letters, underscore, and $ sign
//let 3years = 3;
//let jonas&matilda
// do not start with a capital letter
// constant numbers are in uppercase ->
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
console.log(myFirstJob);
*/

////////////////////////////////////////
// DATA TYPES
/*
values can be an object or a primitive
Dynamic typing = data types are determined automatically; the value has the type not the variable
Data Types:
Number, String, Boolean, Undefined, Null, Symbol, BigInt */
/*
// Boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Elias");

// Dynamic Typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 2070;
console.log(typeof year);

// Typeof ERROR
console.log(typeof null);
*/

////////////////////////////////////////
// LET, CONST, VAR
// let -> when you want to mutate and be empty initially
// const -> value cannot be changed, should always be initialized
// var -> old way of defining a variable prior to ES6
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = "programmer";
job = "teacher";
console.log(job);
*/

////////////////////////////////////////
// BASIC OPERATORS
/*
//Math operators
const now = 2200;
const ageElias = now - 1991;
const ageChise = now - 2050;

console.log(ageElias, ageChise);
console.log(ageElias * 2, ageElias / 2);

//EXPONENT
console.log(2 ** 3);

//CONCATENATE STRINGS
const firstName = "Elias";
const lastName = "Ainsworth";
console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparison Operators
// >, <, >=, <=
console.log(ageElias > ageChise);
console.log(ageChise >= 18);

const isFullAge = ageChise >= 18;
*/

////////////////////////////////////////
// OPERATOR PRECEDENCE
/*
const now = 2200;
const ageElias = now - 1991;
const ageChise = now - 2050;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageElias + ageChise) / 2;
console.log(ageElias, ageChise, averageAge);
*/

////////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS
/*
const firstName = "Elias";
const job = "Magus";
const birthYear = 2000;
const year = 2200;

const elias =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(elias);

const eliasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(eliasNew);

console.log(`Just a regular string...`);

//Multi-line strings:
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines with`);
*/

////////////////////////////////////////
// IF/ELSE
/*
const age = 15;

if (age >= 18) {
  console.log("Chise can start her driving license.");
} else {
  const yearsLeft = 18 - age;
  console.log(`Chise is still too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

////////////////////////////////////////
// TYPE CONVERSION + TYPE COERCION
/*
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Elias")); //NaN
console.log(typeof NaN); // an invalid no.

console.log(String(23));

// Type coercion -> the number was converted to string
console.log("I am " + 200 + " years old");
// string converted to no.
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n); // 10
*/

////////////////////////////////////////
// TRUTHY AND FALSY VALUES
/*
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Elias"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 500;
if (money) {
  console.log(`Don't spend it all!`);
} else {
  console.log(`You should get a job!`);
}

let height;
if (height) {
  console.log(`Yay! Height is defined!`);
} else {
  console.log("Height is UNDEFINED!");
}
*/

////////////////////////////////////////
// EQUALITY OPERATORS
// '===' -> does not perform type coercion
// '==' -> performs type coercion
/*
const age = "18";
if (age === 18) console.log(`You just became an adult! (Strict)`);
if (age == 18) console.log(`You just became an adult! (loose)`);

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

// Different/Not Equal Operator
if (favorite !== 23) console.log("Why not 23?");
*/

////////////////////////////////////////
// LOGICAL OPERATORS
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
  console.log("Chise is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Chise is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

////////////////////////////////////////
// SWITCH STATEMENT
// switch is a strict comparison
/*
const day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log(`Go to coding meetup`);
    break;
  case "Tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "Wednesday":
  case "Thursday":
    console.log(`Write code examples`);
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day`);
}
*/

////////////////////////////////////////
// STATEMENTS + EXPRESSIONS
// expression = a piece of code that produces value (words)
// statements = a bigger piece of code that doesn't produce a value (sentence)
// template literals all insert an expression

////////////////////////////////////////
// CONDITIONAL OPERATOR (TERNARY OPERATOR)
// it produces a value and can be used in a template literal
/*
const age = 23;
age >= 18
  ? console.log(`I like to drink wine.`)
  : console.log(`I like to drink water.`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

// without TERNARY OPERATOR
let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
*/

////////////////////////////////////////
// JAVASCRIPT VERSIONS
// Brendan Eich -> created the first version of JavaScript
// JavaScript has backwards compatibility, nothing is removed, new releases are just updates and added (Don't break the web)
// There is no forward compatibility
