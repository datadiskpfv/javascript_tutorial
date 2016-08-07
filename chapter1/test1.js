/**
 * Created by p on 01/08/2016.
 */

"use strict";

// Call the console.log function.
console.log('Hello World');
console.log('goodnight');

var a = 5, b = 4;
var sum = a + b;
console.log(sum);

var test = 1;
if (test) {
    console.log('Passed')
}
else {
    console.log('Failed')
}

function hello() {
    console.log("inside a function");
}
hello();

var message = "some string";
var undef;                          // variable is undefined

// you can check for undefined
if ( undef == undefined ) {
    console.log('undef equals undefined');
}

var test1 = null;
// test for null value
if ( test1 == null ) {
    console.log("test1 equals null")
}
// null is also undefined
if ( test1 == undefined ) {
    console.log("null equals undefined");
}

console.log("typeof message equals: " + typeof message);
console.log("typeof hello equals: " + typeof "hello");
console.log("typeof 95 equals: " + typeof 95);
console.log("typeof undef equals: " + typeof undef);

// convert anything to boolean value using Boolean cast
var message = "Hello World!";
var boolvalue = Boolean(message);
console.log("boolean value: " + boolvalue);

// number are pretty the same as in other languages
var intNum = 100;
// var octNum = 070;      not allowed in strict mode
var hexNum = 0xA;
console.log("intnum: " + intNum + "  hexnum: " + hexNum);

// float numbers (becareful as rounding can produce errors)
var floatNum1 = 1.0;
var floatNum2 = 0.1;
var floatNum3 = 3.125e7;
console.log("floatNum1: " + floatNum1 + "  floatNum2: " + floatNum2 + "  floatNum3: " + floatNum3);

console.log("Max Value: " + Number.MAX_VALUE + "  Min Value: " + Number.MIN_VALUE);
console.log("Negative Infinity: " + Number.NEGATIVE_INFINITY + "  Positive Infinity: " + Number.POSITIVE_INFINITY);

// Not a Number (NaN)
var nan1 = 8 / 0;
console.log(isNaN(nan1));       // false divide by zero is a number, thus false
console.log(isNaN("blue"));     // blue cannot be converted to a number, thus true
console.log(isNaN(true));       // true be converted to a number (1), thus false

// you can use parseInt and parseFloat
console.log(parseInt("1234blue"));      // will strip the number
console.log(parseInt("0xA"));           // will convert hex to decimal (10)
console.log(parseInt("22.5"));          // will round down to int

console.log(parseFloat("1234blue"));      // will strip the number
console.log(parseFloat("0xA"));           // will convert hex to decimal (10)
console.log(parseFloat("22.5"));          // will use the float number

// strings - single and double quotes are the same in javascript
var string1 = "Hello World!\nGoodbye";
console.log(string1);

// convert to string
var numString1 = 10;
console.log(numString1.toString());
console.log(numString1.toString(16));

console.log(String(10));
console.log(String(true));