'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// How the DOM works behind the scenes
/*
DOM
-> Allows JS to interact with the browser
-> DOM Tree - represented by a node
-> Inheritance - all the child types get access to the methods and properties of the parent
-> Thanks to Inheritance we can call Listeners on every node
*/

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Selecting
const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); // returns an HTML collection
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // returns an HTML collection

// Creating and inserting elements
// .insertAdjacentHTML

// Other methods of creating
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// you can use prepend() and append() to move elements
// DOM elements are unique and can only be at one place at a time
// header.prepend(message); //adds as first child
header.append(message); //adds as last child

// to duplicate DOM elements
// header.append(message.cloneNode(true));

// to append as a sibling
header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn btn--close-cookie') /
  addEventListener('click', function () {
    // message.remove();
    // old way by DOM Traversing
    message.parentElement.removeChild(message);
  });

/////////////////////////////////////////////
// Styles, Attributes, and Classes

// Styles
// using style property   set as an inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //not gonna work
console.log(message.style.backgroundColor);

// get computed style - gets the style as it is on the page
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// changing styles in css variables placed in root
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// these ones only work on standard properties
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // for absolute source
console.log(logo.className);

// setting attributes
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// for relative url/src
console.log(logo.getAttribute('src'));

// on links
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // returns absolute url
console.log(link.getAttribute('href')); //as written in HTML

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('Elias', 'Chise');
logo.classList.remove('Elias', 'Chise');
logo.classList.toggle('Elias', 'Chise');
logo.classList.contains('Elias', 'Chise'); // not includes

// to set a class name
logo.className = 'Juuzo'; // do not use this! it overrides all existing classes
