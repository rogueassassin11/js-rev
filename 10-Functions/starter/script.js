'use strict';

/////////////////////////////////////////
// DEFAULT PARAMETERS
// you can put expressions as default
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// to skip a default parameter
createBooking('LH123', undefined, 1000);
*/

///////////////////////////////////////////
// PASSING ARGUMENTS (VALUES VS. REFERENCE)
// Passing by value -> JS uses this
// Passing by reference
/*
const flight = 'LH234';
const elias = {
  name: 'Elias Ainsworth',
  passport: 23424224,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23424224) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, elias);
console.log(flight);
console.log(elias);

// is the same as doing:
// flightNum = flight
// const passenger = jonas --> this is a reference; whatever changed in the copy is the same as original

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(elias);
checkIn(flight, elias);
*/

///////////////////////////////////////////
// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
/*
FIRST CLASS FUNCTIONS
-> functions are simply values 
-> can be stored in variables or object properties
-> can be passe as an argument
-> another 'type' of object

HIGHER ORDER FUNCTION
-> receives another function as an argument
-> returns a new function

CALLBACK FUNCTIONS
-> functions that are called later or passed as an argument

ABSTRACTION
-> hide the low-level details of how a code works
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👏');
};
document.body.addEventListener('click', high5);

['Elias', 'Chise', 'Lindel'].forEach(high5);
*/

///////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS
/*
-> used in functional programming
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Elias');
greeterHey('Chise');

greet('Hello')('Elias');

const greetArrow = greeting =>
  function (name) {
    console.log(`${greeting} ${name}`);
  };
greetArrow('Hallo')('Escanor');

// an arrow function returning another arrow function
const greetArrow2 = greeting => name => console.log(`${greeting} ${name}`);
greetArrow2('Hallo')('Merlin');
*/

///////////////////////////////////////////
// CALL AND APPLY METHODS
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book(239, 'Elias Ainsworth');
lufthansa.book(635, 'Chise Hatori');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// no longer a method but an ordinary function
const book = lufthansa.book;

// whatever passed as the first argument of the call method sets the 'this' keyword
book.call(eurowings, 23, 'Angelica Barley');
console.log(eurowings);
book.call(lufthansa, 239, 'Lindel Lindenbaum');

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mikhail Renfred');
console.log(swiss);

// Apply method -> same as call but is passed with an array
const flightData = [583, 'Rahab'];
book.apply(swiss, flightData);
console.log(swiss);

// modern JS - just spread out the array
book.call(swiss, ...flightData);
*/
