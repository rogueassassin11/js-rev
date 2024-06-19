'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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
// Smooth Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////
// Page Navigation

//without Event Delegation
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Link!');
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

// With Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element orignated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy (check if the target element contains the class you are interested in)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////
// TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Use event delegation on the common parent element
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause - an if statement that will return early if a condition is matched
  if (!clicked) return;

  // remove active class on all
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // add active class on clicked
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
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
/*
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
*/

/////////////////////////////////////////////
// Styles, Attributes, and Classes
/*
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
*/

/////////////////////////////////////////////
// Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :)');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// old school of listening for events
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :)');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/

/////////////////////////////////////////////
// BUBBLING AND CAPTURING IN EVENTS
// PROPAGATING EVENTS
/*
1. Capturing Phase - sometimes irrelevant and not useful
2. Target Phase
3. Bubbling 
    - climbs up to the parents
    - the event starts from the target and bubbles up as if the event happened on the parents
 4. addEventListeners - only listen for events in the bubbling phase;
      - adding 'true' - makes it listen for the capturing phase; reverses the order, event travels down
*/
/*
// rgb(255, 2555, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // To stop the event propagation (generally not a good ideea, but can be done)
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

// setting to 'true' makes it 'capture'
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', e.target, e.currentTarget);
  },
  true
);
*/

/////////////////////////////////////////////
// DOM TRAVERSING
/*
const h1 = document.querySelector('h1');

// Going downwards: selecting child
console.log(h1.querySelectorAll('.highlight')); //finds children no matter how deep in the DOM tree
console.log(h1.childNodes); //not that used
console.log(h1.children); // returns direct children through an HTML Collection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// finding the parent element in the DOM tree no matter how far
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary )';

// Going sideways: accessing Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// turn the HTML collection into an array
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
