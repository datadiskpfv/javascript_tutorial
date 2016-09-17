/**
 * Created by vallep on 8/14/2016.
 */

// arrays in javascript can hold strings and integers
var mixed = new Array("red", 1, "blue", 2, "green", 3);
console.log("mixed[0]: " + mixed[0]);
console.log("mixed[3]: " + mixed[3]);

// create an array with an initial length
var largeArray = new Array(100);
console.log("large array size: " + largeArray.length);

// you can also omit the new keyword and still create an array
var noNew = Array("red", 1, "blue", 2, "green", 3);
console.log("noNew[3]: " + noNew[3]);

// you can even just use brackets only
var justBrackets = ["red", 1, "blue", 2, "green", 3];
console.log("justBrackets[4]: " + justBrackets[4]);

// so you have three ways to create an array (in this case empty arrays)
var array1 = new Array();
var array2 = Array();
var array3 = [];

// you can assign values to arrays in normal way
var array4 = new Array();
array4[0] = "zero";
array4[1] = "one";
array4[2] = "two";
console.log(array4);

// unset elements in array are undefined
var array5 = new Array();
array5[2] = "some text";
console.log(array5[0]);
console.log(array5[2]);

// detecting if array
var array6 = Array();
if ( array6 instanceof Array ) {
    console.log("array 6 is an Array (using instanceof)");
}

if ( Array.isArray(array6) ) {
    console.log("array 6 is an Array (using Array.isArray)");
}

// displaying arrays
var array7 = ["hello", "goodbye"];
console.log(array7);
console.log(array7.toString());
console.log(array7.valueOf());
console.log(array7.toLocaleString());       // may return the same as toString

// use join to join elements in array
var array8 = ["hello", "goodbye", "and", "goodnight"];
console.log(array8.join('||'));