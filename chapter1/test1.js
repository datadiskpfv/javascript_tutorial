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
console.log(typeof message);
console.log(typeof "hello");
console.log(typeof 95);
console.log(typeof undef);
