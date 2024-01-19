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

JS ENGINE -> parsing -> compilation -> execution -> optimazation

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

*/
