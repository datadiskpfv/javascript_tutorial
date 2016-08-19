/**
 * Created by vallep on 19/08/2016
 */

var s1 = "some text";
s1.color = "red";
console.log(s1.color);
console.log(s1);

// casting and using primitive are different
var value = "25";                   // string value
var number = Number(value);         // casting function (primitive wrapper)
var obj = new Number(value);        // using an object wrapper

console.log(typeof number);         // primitive number
console.log(typeof obj);            // object

// there is a boolean object type
var bool1 = new Boolean(true);
console.log(bool1.valueOf());
console.log(typeof bool1);

// there is a string object type
var string1 = new String("Hello World");
console.log(string1.valueOf());
console.log(typeof string1);

// there a character methods
var string2 = "The quick brown fox....";
console.log(string2.charAt(0));                 // starts at zero
console.log(string2.charCodeAt(0));             // ascii code 84
console.log(string2[0]);                        // starts at zero