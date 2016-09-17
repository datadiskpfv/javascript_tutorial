/**
 * Created by vallep on 19/8/2016.
 */

// Javascript does a pass through first to find functions and adds them to top of source tree, however this is not
// the case when you assign a function to a variable

// there are three ways to create a function, the last is not recommended
function sum1 (num1, num2) {
    return num1 + num2;
}

var sum2 = function (num1, num2) {
    return num1 + num2;
}

var sum3 = new Function("num1", "num2", "return num1 + num2");      // not recommended - bad performance

// because functions are objects you can have multiple names for the same function
function sum4 (num1, num2) {
    return num1 + num2;
}

var sum5 = sum4;                // both sum4 and sum5 point to the function object
console.log(sum5(10, 10));      // notice we use sum5 variable

// because a function is a object there is no overloading
function overload1 (num1) {
    return num1 + 10;
}

function overload1 (num1) {         // this will completely overwrite above
    return num1 + 100;
}

console.log(overload1(100));        // notice it calls the last function

// you can call a function as a argument in another function
function add10 (num1) {
    console.log("calling add10");
    return num1 + 10;
}

function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}
console.log(callSomeFunction(add10, 20));

// there are two special objects that are inside a function, arguments and this, the argument object has a
// property called callee

function add20 (num1) {
    console.log(arguments);
    console.log(arguments.callee);      // pointer to the function that owns the arguments object
}
console.log(add20(20));

color = "red";
var o = { color: "blue" };

function sayColor() {
    console.log(this.color);            // this wont be determined until function is run
}

sayColor();                             // color is global scope so this will point to red object
o.sayColor = sayColor;
o.sayColor();                           // now this points to object o so color will be blue

// you can see how many arguments the function takes using the length property
console.log(add20.length);
console.log(sum4.length);

// you can use two methods called apply() and call()
// apply() -  has two arguments the value of this and an array of arguments (or can be arguments object)
// call() - has two arguments the value of this and the remaining arguments are passed directly

// with apply and call its the ability to pass this into the function that can help
function sum6(num1, num2) {
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum6.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum6.apply(this, [num1, num2]);
}

function callSum3(num1, num2) {
    return sum6.call(this, num1, num2);
}

console.log(callSum1(10,10));
console.log(callSum2(10,20));
console.log(callSum3(10,30));

// you can also use bind to bind an object to this
color = "red";
var o = {color: "blue"};

function sayColor1() {
    console.log(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor();