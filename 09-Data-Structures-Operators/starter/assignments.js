///////////////////////////////////////
// EXAMPLE OBJECT

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,

    printBookInfo: function ({ title, author, year = 'year unknown' }) {
      console.log(`${title} by ${author}, ${year}`);
    },
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

///////////////////////////////////////
// WORKING WITH STRINGS III
/*
// 17.1
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

function logBookCategories(categories) {
  const catArr = categories.split(';');

  for (const cat of catArr) {
    console.log(cat);
  }
}
logBookCategories(bookCategories);

// 17.2
function getKeywordsAsString(arr) {
  const keyArr = [];
  for (let i = 0; i < arr.length; i++) {
    keyArr.push(...books[i].keywords);
  }

  const keySet = [...new Set(keyArr)];

  const keyJoin = keySet.join(';');
  return keyJoin;
}
console.log(getKeywordsAsString(books));

// 17.3
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

function logBookChapters(arr) {
  for (const [chapter, page] of arr) {
    console.log(`${chapter.padEnd(25, '_')} ${page}`);
  }
}
logBookChapters(bookChapters);
*/

///////////////////////////////////////
// WORKING WITH STRINGS II
/*
// 16.1
function normalizeAuthorName(author) {
  const lowercase = author.toLowerCase().trim();
  console.log(lowercase);
  let contributor;
  if (lowercase.includes(`(contributor)`)) {
    contributor = lowercase.replace('(contributor)', '');
  } else {
    contributor = lowercase;
  }
  console.log(contributor);

  const toUpper1 =
    contributor[0].toUpperCase() +
    contributor.slice(1, contributor.indexOf(' '));
  console.log(toUpper1);
  const toUpper2 =
    contributor[contributor.indexOf(' ') + 1].toUpperCase() +
    contributor.slice(contributor.indexOf(' ') + 2, -1);

  console.log(toUpper1, toUpper2);
  return toUpper1 + ' ' + toUpper2;
}

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));
*/
// 16.1 answer:
/*
function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));
  const lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' ') + 1);
  const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
}
*/
/*
// 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// 16.3
function logBookTheme(bookTitle) {
  const lowercase = bookTitle.toLowerCase();

  if (lowercase.startsWith(`computer`)) {
    console.log(`This book is about computers`);
  } else if (
    lowercase.includes(`algorithms`) ||
    lowercase.includes(`structures`)
  ) {
    console.log(`This book is about algorithms and data structures`);
  } else if (
    (lowercase.endsWith(`system`) || lowercase.endsWith(`systems`)) &&
    !lowercase.includes(`operating`)
  ) {
    console.log(
      `This book is about some systems, but definitely not about operating systems`
    );
  }
}

logBookTheme(books[0].title);
*/

///////////////////////////////////////
// WORKING WITH STRINGS I
/*
// 15.1
console.log(books[0].ISBN[6]);
console.log(books[0].ISBN[4]);
console.log(books[0].ISBN[9]);
console.log(books[0].ISBN[8]);

// 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 15.3
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4
function isContributor(author) {
  const contributor = author.slice(author.lastIndexOf(' ') + 1);
  console.log(contributor);
  if (contributor === '(Contributor)') return true;
  else return false;
}

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));
*/

///////////////////////////////////////
// MAPS (ITERATION)
/*
// 1
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// 2
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}
*/

///////////////////////////////////////
// MAPS (FUNDAMENTALS)
/*
// 13.1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// 13.2
bookMap.set('pages', 464);

// 13.3
console.log(bookMap);
const title = bookMap.get('title');
const author = bookMap.get('author');
console.log(`${title} by ${author}`);

// 13.4
console.log(bookMap.size);

// 13.5
if (bookMap.has('author')) console.log(`The author of the book is known`);
*/

///////////////////////////////////////
// SETS
/*
// 12.1
const allKeywords = [];
for (let i = 0; i < books.length; i++) {
  for (const keyword of books[i].keywords) {
    allKeywords.push(keyword);
  }
}
console.log(allKeywords);

// 12.2 - 12.3
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

// 12.4
uniqueKeywords.delete('business');

// 12.5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 12.6
uniqueKeywords.clear();
console.log(uniqueKeywords);
*/

///////////////////////////////////////
// LOOPING OBJECTS (KEYS, VALUES, ENTRIES)
/*
// 11.1
const entries = [];
for (key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
console.log(entries);

// 11.2
for ([key, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  console.log(key, value);
  entries[key].push(value);
}
console.log(entries);

// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);
*/

///////////////////////////////////////
// OPTIONAL CHAINING ('?.')
/*
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
};

function getFirstKeyword(arr) {
  const firstKeyword = arr.keywords?.[0];
  console.log(firstKeyword);
  return firstKeyword;
}

getFirstKeyword(books[0]);
getFirstKeyword(newBook2);
*/

///////////////////////////////////////
// ENHANCED OBJECT LITERALS
/*
// 9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: [bookData[0][1]],
  [bookData[1][0]]: [bookData[1][1][0], bookData[1][1][1]],
  [bookData[2][0]]: [bookData[2][1]],
};

// 9.2
const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
*/

///////////////////////////////////////
// FOR-OF LOOP (LOOPING ARRAYS)
/*
// 8.1
let pageSum = 0;
for (item of books) {
  pageSum += item.pages;
}

console.log(pageSum);

// 8.2
const allAuthors = [];
for (item of books) {
  if (typeof item.author === 'string') {
    allAuthors.push(item.author);
  } else if (typeof item.author === 'object') {
    for (let i = 0; i < item.author.length; i++) {
      allAuthors.push(item.author[i]);
    }
  }
}
console.log(allAuthors);

// 8.3
for ([i, el] of allAuthors.entries()) {
  console.log(`${i + 1}. ${el}`);
}
*/

///////////////////////////////////////
// LOGICAL ASSIGNMENTS OPERATORS
/*
// OR Assignment operator
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// AND assignment operator
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  console.log(
    books[i].title,
    books[i].thirdParty.goodreads.rating,
    books[i].highlighted
  );
}
console.log(books);
*/

///////////////////////////////////////
// NULLISH COALESCING OPERATOR (??)
/*
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
}
*/

///////////////////////////////////////
// SHORT CIRCUITING (|| and &&)
/*
function hasExamplesInJava(book) {
  console.log(`${book.programmingLanguage === 'Java' || 'no data available'}`);
}
hasExamplesInJava(books[0]);
hasExamplesInJava(books[1]);

function loopBooks(bookArr) {
  for (let i = 0; i < bookArr.length; i++) {
    bookArr[i].onlineContent &&
      console.log(`${bookArr[i].title} provides online content`);
  }
}

loopBooks(books);
*/

///////////////////////////////////////
// REST PATTERN AND PARAMETERS
/*
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/

///////////////////////////////////////
// SPREAD OPERATOR
/*
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

function spellWord(str) {
  console.log(...str);
}

spellWord('JavaScript');
*/

///////////////////////////////////////
// DESTRUCTURING OBJECTS
/*
books[0].printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);
*/

///////////////////////////////////////
// DESTRUCTURING ARRAYS
/*
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/
