'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////////////////////// CREATING DOM ELEMENTS

// displaying movements
const displayMovements = function (movements) {
  // to remove dummy html:
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

console.log(containerMovements.innerHTML);

///////////////////////////////////////////
// DISPLAY BALANCE

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

///////////////////////////////////////////
// DISPLAY SUMMARY

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

///////////////////////////////////////////
// COMPUTING USERNAME

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

///////////////////////////////////////////
// LOGIN EVENT HANDLER

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent default page reload/form submit
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    // remove focus
    inputLoginPin.blur();

    // display UI and welcom message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // display movements
    displayMovements(currentAccount.movements);

    // display balance
    calcDisplayBalance(currentAccount.movements);

    // display summary
    calcDisplaySummary(currentAccount);
  }
});

/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////// ARRAY METHODS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice(beginning index, ending index)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

// when slice(-2), it slices from the end
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// you can use slice to make shallow copies
console.log(arr.slice());
console.log([...arr]);

// splice - changes the original array
console.log(arr.splice(2));

// gets the last element
arr.splice(-1);

// splice(position, no. of elements to delete)
arr.splice(1, 2);
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(' - '));
*/

///////////////////////////////////////////// AT METHOD
// - helpful when method chaining

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// to get last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

// at method also works on strings
console.log('Elias'.at(-1));
*/

///////////////////////////////////////////// FOREACH METHOD
//
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for (const movement of movements) {

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-----FOR EACH------`);

// for each loops over an array and calls a function; you can get the current item as an argument in the callback function
// for each passes the current element, index, and the array itself; order matters!
// continue and break do not work on forEach
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
*/
/*
// forEach on maps - parameters can be the value, key, and the map itself
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach on Set - only keys
// '_' on parameter is an empty parameter
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
function checkDogs(dogsJulia, dogsKate) {
  console.log(dogsJulia);
  let correctJulia = [...dogsJulia].slice(1, 3);
  console.log(correctJulia);

  const bothDogs = [...correctJulia, ...dogsKate];

  bothDogs.forEach(function (dogAge, i, arr) {
    if (dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy and is ${dogAge} years old`
      );
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log(`--- TEST DATA 2 ---`);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

///////////////////////////////////////
// MAP, FILTER, REDUCE - DATA TRANSFORMATION METHODS
/*
Map -> loops over the original array, applies a function, and returns a new array

Filter -> elements for which the condition is true is included in the returned array

Reduce -> reduces all elements of the array into one single value
*/

///////////////////////////////////////
// MAP METHOD

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor)};

const movementUSDArr = movements.map(mov => mov * eurToUsd);
console.log(movementUSDArr);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);
*/

///////////////////////////////////////
// FILTER METHOD
/*
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
*/

///////////////////////////////////////
// REDUCE METHOD
/*
console.log(movements);

// accumulator -> snowball; accumulates the sum
const balance = movements.reduce(function (accu, cur, i, arr) {
  console.log(`Iteration ${i}: ${accu}`);
  return accu + cur;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArr);

// Getting maximum value
const max = movements.reduce((accu, mov) => {
  if (accu > mov) return accu;
  else return mov;
}, movements[0]);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* CHAINING

const calcAverageHumanAgeChain = function (ages) {
  const average = ages
    .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(dog => dog >= 18)
    .reduce((accu, dog, i, arr) => accu + dog / arr.length, 0);
  return average;
};
const avg1 = calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
const calcAverageHumanAge = function (ages) {
  const dogAges = [...ages];
  console.log(dogAges);
  const dogHumanAge = dogAges.map(function (dog) {
    if (dog <= 2) {
      return 2 * dog;
    } else if (dog > 2) {
      return 16 + dog * 4;
    }
  });
  console.log(dogHumanAge);
  const dog18 = dogHumanAge.filter(function (dog) {
    return dog >= 18;
  });
  console.log(dog18);

  // const dogAvg =
  //   dog18.reduce(function (accu, dog) {
  //     return accu + dog;
  //   }) / dog18.length;

  const average = dog18.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
different way of getting avg:
ex:
avg of 2 + 3 === 2/2 + 3/2 => 2.5
*/

///////////////////////////////////////
// CHAINING ARRAY METHODS
/*
- do not keep chaining if large app
- avoid mutating arrays; do not chain when spliced

*/

/*
console.log(movements);
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((accu, mov) => accu + mov, 0);

console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// FIND METHOD
// - loops over the array to retrieve the first of the element array that satisfies a condition
// - needs a callback function that is a boolean
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let accountFor = [];
for (const acc of accounts)
  if (acc.owner === 'Jessica Davis') accountFor.push(acc);
console.log(accountFor);
*/
