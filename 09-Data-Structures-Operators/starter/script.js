'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 ENHANCED OBJECT LITERAL
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring object arguments
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // for spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  // for rest pattern and parameters
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// MAPS (ITERATION)
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// convert objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// map as an iterable; objects are not
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

// challenge answer
if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// quicker way:
// console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries()); same as above
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////////////////
// MAPS (FUNDAMENTALS)
// - keys can be any data type unlike objects which are mainly strings
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// methods on maps
console.log(rest.has('categories'));
rest.delete(2);
rest.clear();
// rest.set([1, 2], 'Test'); will not work
const arr = [1, 2];
rest.set(arr, 'Test');

// with DOM Keys
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
*/

///////////////////////////////////////
// SETS
// - are also iterables but with unique elements
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Elias'));

// how many different items there are
console.log(ordersSet.size);

// to check if an item is included
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// to add/delete new elements
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// to retrieve? cannot be done; all are unique; use array if you need an index
for (const order of ordersSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Ainsworth').size);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// 1
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2
let oddValuesSum = 0;
for (const oddValues of Object.values(game.odds)) {
  oddValuesSum += oddValues;
}
const oddValuesAvg = oddValuesSum / Object.values(game.odds).length;
console.log(oddValuesAvg);

// 3
console.log(Object.entries(game.odds));
for (const [i, el] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${
      game.hasOwnProperty(String(i)) ? `of victory ${game[i]}` : 'draw'
    }: ${game.odds[i]}`
  );
}

// BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

///////////////////////////////////////
// LOOPING OBJECTS (KEYS, VALUES, ENTRIES)
/*
// for property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days `;

// looping property names (keys)
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// for property values
const values = Object.values(openingHours);
console.log(values);

// entries here: key and value
// looping an entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
*/

///////////////////////////////////////
// OPTIONAL CHAINING ('?.')
// -> if a certain property does not exist, undefined is returned immediately
/*
// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example with object properties
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// for methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// For arrays
const users = [{ name: 'Elias', email: 'elias@magus.com' }];
console.log(users[0]?.name ?? 'User does not exist');

// equivalent to:
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
*/

///////////////////////////////////////
// ENHANCED OBJECT LITERALS
// 1. just including the object name
// 2. writing methods does not need the function keyword
// 3. object property names can now be computed

///////////////////////////////////////
// FOR-OF LOOP (LOOPING ARRAYS)
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// item is the current element in the iteration
for (const item of menu) console.log(item);

// to get current index by destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

console.log(players1);
console.log(players2);

// 2.
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.  'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'
function printGoals(...goals) {
  for (let i = 0; i < goals.length; i++) {
    console.log(`${goals[i]}`);
  }
  console.log(`Total goals: ${goals.length}`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
game.odds.team1 < game.odds.team2 &&
  console.log(`Team 1 is more likely to win!`);
game.odds.team1 > game.odds.team2 &&
  console.log(`Team 2 is more likely to win!`);
*/

///////////////////////////////////////
// LOGICAL ASSIGNMENT OPERATORS (ES2021)
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Juuzo Inui',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// LOGICAL NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest2.owner = rest2.owner && 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);
*/

///////////////////////////////////////
// NULLISH COALESCING OPERATOR (??)
// operates on nullish values
// nullish values: null and undefined
// 0 or '' are as if truthy
/*
// previously 0 is falsy in short circuit
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

///////////////////////////////////////
// SHORT CIRCUITING (|| and &&)
/*
console.log(`----OR OPERATOR-----`);
// use any data type, return any data type, short-circuiting
// OR SHORT CIRCUITING - if the first value is a truthy, it immediately returns the first value
console.log(3 || 'Elias');
console.log('' || 'Elias');
console.log(true || 0);
console.log(undefined || null);

// returns 'Hello' because it is the first truthy value
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// if 0 it will not work
restaurant.numGuests = 23;
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND OPERATOR SHORT CIRCUIT
// when first is false, it will not evaluate anymore
console.log('---- AND OPERATOR ----');
console.log(0 && 'Elias');

// takes the last value of true when consecutively truthy
console.log(7 && 'Elias');

console.log('Hello' && 23 && null && 'Elias');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/////////////////////////////////////////
// REST PATTERN AND PARAMETERS (...)
// - compresses items
// rest is on the left side of =
// should always be the last
/*
// destructuring in array:
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// destructuring in objects:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// In functions (REST PARAMETERS):
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// combining with spread operator
const x = [23, 5, 7];
add(...x);

// in a function
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/////////////////////////////////////////
// SPREAD OPERATOR (...) - unpacks an array
/* spread is on the right side of =!

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

// when you need individual elements
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copying arrays (shallow)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables (array, strings, maps, sets but NOT objects)
// on a string:
const str = 'Elias';
const letters = [...str, ' ', 'A.'];
console.log(letters);
console.log(...str);

// spread operator in functions

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// spread operator in objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Lindel' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/////////////////////////////////////////
// DESTRUCTURING OBJECTS

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',

  starterIndex: 1,
});
*/

/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing object property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables by wrapping in parenthesis
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/////////////////////////////////////////
// ARRAY DESTRUCTURING
/*
// without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
const [x, y, z] = arr;
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

// to skip
const [first1, , second1] = restaurant.categories;
console.log(first1, second1);

// to switch variables
const temp = first;
first = second;
second = temp;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

// working with methods
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
