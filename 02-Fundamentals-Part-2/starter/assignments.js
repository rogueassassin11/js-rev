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
