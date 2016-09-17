"use strict";

// will cover objects later, but is how to create same as java really
var o = Object();
console.log(o.toString());

// standard set of operators ++, --, = +
var age = 10;
console.log(age++);         // still 10 but added 1
console.log(++age);         // now 12 added 1 to 11
console.log(age--);         // now 12 but removed one
console.log(--age);         // now 10 as removed one from 11

age = -age;                 // changes to a negative number
console.log(age);

// javascript has normal bitwise operators, *, +, /, -, >, <, >=, <=, == and !=

// the identical operator
console.log(55 === 55);             // true both are identical
console.log("55" === 55);           // false as one is string and one is number

var test1 = true;
var test2 = false;

test1 ? console.log("test1 is true") : console.log("test1 is false");
test2 ? console.log("test2 is true") : console.log("test2 is false");