/**
 * Created by vallep on 8/13/2016.
 */

/*
Six data types that are primitives (passed by value):
    Boolean
    Null
    Undefined
    Number
    String
    Symbol (new in ECMAScript 6)
*/

/* object types are passed by reference */

// All primitive types are always pass by value
var num = 5;

function test(num) {
    num = num + 10;
    console.log("num inside function: " + num)
}

// notice that num did not change
test(num);
console.log("num outside function: " + num.toString());

// reference values are different, the reference is passed
function setName(obj) {
    obj.name = "Lorraine";
}

var person = new Object();
person.name = "Paul";
console.log("Your name is " + person.name);
setName(person);
console.log("Your name is " + person.name);

// use typeof to check if passed by value or ref
console.log("num: " + typeof num);
console.log("person: " + typeof person);