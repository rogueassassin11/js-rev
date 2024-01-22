'use strict';

////////////////////////////////////////
// LECTURE NOTES
/*
JS - high-level, object oriented, multi-paradigm

High-level - memory management does not need to be defined
Garbage-collected - cleans the memory
Interpreted - converting to machine code happens in JS engine
Multi-paradigm - can be procedural, OOP, functional programming
Prototype-based OOP - everything is based on a prototype
First-class Functions - functions are treated as variables
Dynamic - data type of variable can automatically be changed
Single-threaded - can only do one thing at a time
Non-blocking event loop - takes long running tasks, executes them in the background, and puts them back again at the main thread once finished

JS ENGINE -> executes JS code, browsers have them
Call stack - where code is executed, where execution contexts are stacked, and ensures the order of execution
Heap - where objects are stored

COMPILATION -> entire code is converted to machine code at once and then written on a binary file to be executed
VS. 
INTERPRETATION - code is read and executed line by line
VS.
JUST IN TIME Compilation -> entire code is converted to machine code at once, then executed immediately; no binary file

JS ENGINE -> parsing -> compilation -> execution -> optimization

> Event handler functions are Callback functions

> Execution Contexts- environment in which JS is executed, stores all the necessary info for code to be executed
1. Variable environment
2. Scope chain
3. this keyword

**arrow functions do not have arguments object and this keyword


SCOPING - controls how variables are organized and accessed
LEXICAL SCOPING - scoping is controlled by placement of functions and blocks in the code
SCOPE - where a variable is declared, can be global, function, or block

**let and const are only block-scoped;
**var is function-scoped
**functions are all block-scoped


SCOPE CHAIN - (variable lookup) all scopes have access to all the outer scopes in the chain, can also apply to function arguments

** can only apply from bottom-up not top-down
** order of function calls does not affect the scope chain
** only inner scopes have access to the outer scope; cannot happen the other way around
** functions are blocked-scope in 'use strict' mode

*/

////////////////////////////////////////
// SCOPING IN ACTION
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with the same name as outer scope's variable
      const firstName = 'Chise';
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning variables
      output = 'NEW OUTPUT!';
    }

    // add(2, 3);

    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Elias';
calcAge(1991);
*/

////////////////////////////////////////
// HOISTING
/*
Hoisting - makes some types of variable accessible/usable before they are actually declared

Can be hoisted:
1. function declarations
2. var variables - hoisted as undefined

** let and const variables cannot be hoisted (only safe to use after the temporal dead zone)
** const functions are not hoisted
** var functions are undefined

Why hoisting?:
1. to use functions before actual declarations
2. var hoisting is just by-product

** variables created with var have a window property in the window object

*/

// Hoisting variables
// console.log(me);
// console.log(job);
// console.log(year);
/*
var me = 'Elias';
let job = 'Magus';
const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;
*/

////////////////////////////////////////
// THIS KEYWORD
/*
This keyword 
- is a special variable created for every execution context; takes the value of and points to the owner of the function
- is NOT static and it depends on how the function is called, and its value is only assigned when the function is actually called

** arrow functions do not have a this keyword; it gets the this keyword of the surrounding function (lexical this)
** event listener - the THIS is the DOM element the handler is attached to
** can be used with new, call, apply, and bind
** the this keyword in the global scope is the window object
** this keyword points to the object calling the method

*/
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

// arrow functions get the this keyword from the parent scope
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1980);

// this in a method
const elias = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

elias.calcAge();

const chise = {
  year: 2017,
};

// method borrowing
chise.calcAge = elias.calcAge;
chise.calcAge();

const f = elias.calcAge;
f();
*/

////////////////////////////////////////
// REGULAR FUNCTIONS VS. ARROW FUNCTIONS
/* 
- a regular function call has the this keyword 'undefined'
- in arrow functions the this keyword points to the surrounding function (lexical this)
- arrow functions do not get the arguments keyword
- arguments keyword can be used in function declarations and function expressions
*/

// var firstName = 'Chise';
/*
const elias = {
  firstName: 'Elias',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // // preserves the this keyword
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // using arrow function's lexical this to point the this keyword
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // the this here is pointing on the global window object

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

elias.greet();
elias.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

////////////////////////////////////////
// PRIMITIVE OBJECTS VS. REFERENCE TYPES
/*
PRIMITIVES - number, string, boolean, undefined, null, symbol, bigint
OBJECTS - object literal, arrays, functions

** primitives are stored in the call stack
** objects are stored in the heap
** changing values in the heap for const variables are ok

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Elias',
  age: 250,
};

const friend = me;
friend.age = 27;
console.log(friend);
console.log(me);
*/
/*
// PRIMITIVE TYPES
let lastName = 'Ainsworth';
let oldLastName = lastName;
lastName = 'Barley';
console.log(lastName, oldLastName);

const chise = {
  firstName: 'Chise',
  lastName: 'Hatori',
  age: 27,
};

// REFERENCE TYPES
const marriedChise = chise;
marriedChise.lastName = 'Ainsworth';
console.log(`before`, chise);
console.log(`after`, marriedChise);

// marriedChise = {} is not allowed when const is used

// COPYING OBJECTS
const chise2 = {
  firstName: 'Chise',
  lastName: 'Hatori',
  age: 27,
  family: ['Rutsu', 'Elias'],
};

// object.assign is only a shallow copy that only copies in the first level
const chiseCopy = Object.assign({}, chise2);
chiseCopy.lastName = 'Ainsworth';

chiseCopy.family.push('Simon');
chiseCopy.family.push('Angelica');
console.log(`before`, chise2);
console.log(`after`, chiseCopy);
*/
