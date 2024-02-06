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
// CALL, APPLY, BIND METHODS
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
  airline: 'Eurowings',
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

// Bind method - defines this keyword once
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Juuzo Inui');
bookEW23('Yuuji Itadori');

// using objects with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// setting a pre-defined parameter
const addVAT = addTax.bind(null, 0.23);
// the same as addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// without bind method
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const promptAnswer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(promptAnswer);

    if (
      promptAnswer === 0 ||
      promptAnswer === 1 ||
      promptAnswer === 2 ||
      promptAnswer === 3
    ) {
      this.answers[promptAnswer]++;
      this.displayResults();
    } else {
      console.log(`Your answer doesn't make sense.`);
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const showArrObj = {};
// const showArr = poll.displayResults;
// showArr.call('array', [5, 2, 3]);
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

///////////////////////////////////////
// IIFE
// -> a function that only executes once
// -> to encapsulate a private variable
// -> not used anymore; you can encapsulate using blocks {}
/*
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE Syntax
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

(() => console.log(`This will also never run again`))();

// block scopes
{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);
*/

///////////////////////////////////////
// CLOSURES
// -> a function has access to the variable environment (VE) of the execution context in which it was created even when it is gone
// -> the closure is the VE attached to the function exactly as it was at the time and place the function was created
// -> because of closure, a function has access to the variables created in its birthplace
// -> closures have higher priority than the scope chain
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// to inspect closures:
console.dir(booker);

// other closure examples:
// closures can change when reassigned
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// reassigning f function
h();
f();
console.dir(f);

// example 2 (timer)
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(function () {
  console.log(`TIMER`);
}, 1000);

boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
