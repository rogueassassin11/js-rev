"use strict";

///////////////////////////////////////
// FUNCTIONS
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people, and its capital city is ${capitalCity}`;
}

const describe1 = describeCountry("Shire", 300, "Hobbiton");
const describe2 = describeCountry("Rivendale", 500, "Elfland");
const describe3 = describeCountry("Gondor", 400, "Numenor");

console.log(describe1);
console.log(describe2);
console.log(describe3);
*/

///////////////////////////////////////
// FUNCTION DECLARATIONS VS EXPRESSIONS
/*
const population = 7900;

function percentageOfWorld1(populationValue) {
  return (populationValue / 7900) * 100;
}

const shire = percentageOfWorld1(300);
const rivendale = percentageOfWorld1(500);
const gondor = percentageOfWorld1(400);

console.log(shire, rivendale, gondor);

const percentageOfWorld2 = function (populationValue) {
  return (populationValue / 7900) * 100;
};

const shire2 = percentageOfWorld2(300);
const rivendale2 = percentageOfWorld2(500);
const gondor2 = percentageOfWorld2(400);

console.log(shire2, rivendale2, gondor2);
*/

///////////////////////////////////////
// ARROW FUNCTION
/*
const percentageOfWorld3 = (populationValue) => (populationValue / 7900) * 100;

const shire3 = percentageOfWorld3(300);
const rivendale3 = percentageOfWorld3(500);
const gondor3 = percentageOfWorld3(400);

console.log(shire3, rivendale3, gondor3);
*/

///////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS
/*
function percentageOfWorld1(populationValue) {
  return (populationValue / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} people which is about ${percentage} of the world.`;
}

console.log(describePopulation(`Shire`, 300));
*/

///////////////////////////////////////
// ARRAYS
/*
const population = [300, 400, 500, 600];
console.log(population);

console.log(population.length === 4);

const percentageOfWorld3 = (populationValue) => (populationValue / 7900) * 100;

const percentages = [
  percentageOfWorld3(population[0]),
  percentageOfWorld3(population[1]),
  percentageOfWorld3(population[2]),
  percentageOfWorld3(population[3]),
];

console.log(percentages);
*/

///////////////////////////////////////
// BASIC ARRAY OPERATIONS
/*
const neighbours = ["Rivendale", "Rohan", "Gondor"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if (!neighbours.includes("Valinor")) {
  console.log(`Probably not a Middle-Earth country`);
}

const countryIndex = neighbours.indexOf("Rohan");
neighbours[countryIndex] = "Mordor";
console.log(neighbours);
*/

///////////////////////////////////////
// INTRO TO OBJECTS
/*
const myCountry = {
  country: "Shire",
  capital: "Hobbiton",
  language: "Shire Common Tongue",
  population: "300",
  neigbours: ["Rivendale", "Rohan", "Gondor"],
};
*/

///////////////////////////////////////
// DOT VS. BRACKET NOTATION
/*
const myCountry = {
  country: "Shire",
  capital: "Hobbiton",
  language: "Shire Common Tongue",
  population: 300,
  neighbours: ["Rivendale", "Rohan", "Gondor"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, and ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`
);

myCountry.population += 200;
console.log(myCountry.population);
myCountry["population"] -= 200;
console.log(myCountry.population);
*/

///////////////////////////////////////
// OBJECT METHODS
/*
const myCountry = {
  country: "Shire",
  capital: "Hobbiton",
  language: "Shire Common Tongue",
  population: 300,
  neighbours: ["Rivendale", "Rohan", "Gondor"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} ${this.language} speaking people, and ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

///////////////////////////////////////
// ITERATIONS: FOR LOOP
/*
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting!`);
}
*/

///////////////////////////////////////
// LOOPING ARRAYS + BREAKING & CONTINUING
/*
const populations = [300, 400, 500, 600];
const percentages2 = [];

function percentageOfWorld1(populationValue) {
  return (populationValue / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/

///////////////////////////////////////
// LOOPING BACKWARDS + NESTED LOOPS
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

///////////////////////////////////////
// WHILE LOOP
/*
const populations = [300, 400, 500, 600];
const percentages3 = [];

function percentageOfWorld1(populationValue) {
  return (populationValue / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
*/
