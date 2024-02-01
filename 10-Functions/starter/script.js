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

///////////////////////////////////////////
// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
//
//
