// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/////////////////////////////////////////
// SETTING UP VS CODE
/*
1. Prettier - opinionated formatter
  - default formatter -> esbenp
  - format on save -> check the box

2. Snippets
  - preferences - user code snippets
  - 'cl' to expand console.log()

3. Auto Rename
4. Auto Close
5. Image Preview
5. TODO Highlight
6. LiveServer Extension
7. NodeJS
  - npm install live-server -g


const x = '23';

const calcAge = (birthYear) => 2037 - birthYear;
console.log();
*/

/////////////////////////////////////////
// LEARNING HOW TO CODE
/*

4 STEPS TO SOLVE ANY PROBLEM
1. Ask the right questions to get a clear picture of the problem. Understand it completely.
2. Divide and Conquer: break a big problem into smaller sub-problems.
3. Don't be afraid to research.
4. Write a pseudo-code before writing the actual code.


*/

/////////////////////////////////////////
// DEBUGGING
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  // FIND THE BUG
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY THE BUG
console.log(measureKelvin());
*/

/////////////////////////////////////////
// CODING CHALLENGE
/*
const forecastArr1 = [17, 21, 23];
const forecastArr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = '... ';
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]} degrees Celsius in ${i + 1} ${
      i + 1 === 1 ? 'day' : 'days'
    } ... `;
  }
  console.log(string);
};

printForecast(forecastArr1);
printForecast(forecastArr2);
*/
