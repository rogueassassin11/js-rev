////////////////////////////////////////
// VALUES AND VARIABLES
/*
let country = "Shire";
let continent = "Middle-earth";
let population = 300;

console.log(country);
console.log(continent);
console.log(population);
*/

////////////////////////////////////////
// DATA TYPES
/*
let isIsland = false;
let language;

console.log(isIsland);
console.log(language);
*/

////////////////////////////////////////
// LET, CONST, VAR
/*
let language;
language = "Shire Common Tongue";

const country = "Shire";
const continent = "Middle-earth";
let population = 300;
const isIsland = false;
*/

////////////////////////////////////////
// BASIC OPERATORS + STRING TEMPLATE LITERALS
/*
let population = 300;
let language = "Shire Common Tongue";
console.log(population / 2);
console.log(population++);
console.log(population > 6000000);
console.log(population < 33000000);
let description =
  "Shire is in Middle-earth, and its" +
  " " +
  population +
  " Hobbits speak the " +
  language;
console.log(description);

description = `Shire is in Middle-earth, and its ${population} Hobbits speak the ${language}.`;
console.log(description);
*/

////////////////////////////////////////
// IF / ELSE
/*
let population = 3000000000;

if (population > 33000000) {
  console.log(`Shire's population is above average.`);
} else {
  console.log(`Shire's population is ${33000000 - population} below average.`);
}
*/

////////////////////////////////////////
// EQUALITY OPERATORS
/*
const numNeighbors = Number(
  prompt(`How many neighbor countries does your country have?`)
);

if (numNeighbors === 1) {
  console.log(`Only 1 border`);
} else if (numNeighbors > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
*/

////////////////////////////////////////
// LOGICAL OPERATORS
/*
let country = "Shire";
let continent = "Middle-earth";
let population = 300;
let language = "English";
let isIsland = false;

if (language === "English" && population < 500 && !isIsland) {
  console.log(`You should live in ${country}. :)`);
} else {
  console.log(`${country} does not meet your criteria. :(`);
}
*/

////////////////////////////////////////
// SWITCH STATEMENT
/*
const language = "German";

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log(`Most number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place`);
    break;
  case "Hindi":
    console.log(`Number 4`);
    break;
  case "Arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log("Great language too. :D");
}
*/

////////////////////////////////////////
// TERNARY OPERATOR
/*
const population = 300;

console.log(
  `Shire's population is ${population >= 100 ? "above" : "below"} average`
);
*/
