/**
 * Created by vallep on 21/08/2016
 */

/*
 * Function Expressions
*/

// there are two ways to create a function

// you can call this function even before the function syntax is created as javascript will pre-read the script
// looking for functions

// function functionName(arg0, arg1, arg2, etc) {
//    function body
// }

// the next function is created anonymously then assigned to a variable, with this method you need to make sure the
// function is created before you call it

// var functionName = function(arg0, arg1, arg2, etc) {
//                     function body
// };

// because of the different browsers if you want to create a function based on a condition you must do it like below
var sayHi;
var condition = true;

if(condition) {
    sayHi = function() {
        return "Hi";
    }
} else {
    sayHi = function() {
        return "Yo";
    }
}

/*
 * function recursion
 */

function factorial(num) {
    if (num < 1) {
        console.log("returning");
        return 1;
    } else {
        console.log("going deeper: " + num);
        // callee is a property of the arguments object. It can be used to refer to the currently
        // executing function inside the function body of that function
        return num * arguments.callee(num - 1);         // make sure you use the .callee to stop nulling the factorial variable
    }
}
var anotherFactorial = factorial;
factorial = null;                                  // without the .callee the below would cause an error
console.log(anotherFactorial(4));

/*
 * Closures
 */

function foo(){
    var localVariable = 'private variable';         // this will be added to the scope chain
    return function bar(){
        return localVariable;
    }
}

var getLocalVariable = foo();
console.log(getLocalVariable());                     // private variable

/*
 * Closures and variables
 */
 function test1() {
     var result = new Array();

     for(i=0; i < 10; i++) {
         result[i] = function() {
             return i;
         };
     }
     return result;
 }

console.log(test1()[0]());              // they are all 10 because they all point to the same variable i which 10 at the end
console.log(test1()[1]());
console.log(test1()[2]());

function test2() {
    var result = new Array();

    for(i=0; i < 10; i++) {
        result[i] = function(num) {     // we pass by value so we get the proper value before its changed
            return function() {
                return num;
            };
        }(i);
    }
    return result;
}

console.log(test2()[0]());              // now it all looks good
console.log(test2()[1]());
console.log(test2()[2]());

/*
 * this object inside closures
 */

// this object has some complex behaviors inside closures
var name = "The window";

var object = {
    name: "My Object",
    getNameFunc: function(){
        // functions get two special variables when called - this and arguments
        // an inner function cannot access outer functions variables
        // so you can store outer variables to another variable that closures can access
        //var that = this;
        return function(){
            //return that.name;         // access the inner variables that contain outer variable data
            return this.name;
        };
    }
};

console.log(object.getNameFunc()());

/*
 * block scope and mimicking
 */

function outputNumbers(){
    for (var x = 0; x < 5; x++){
        console.log("count% " + x);
    }

    // x should not exist as for loop has finished
    return x;
}

console.log(outputNumbers());       // x gets returned when it should not

// use the below technique to create private variable scope

function outputNumbers2() {
    // insert a private scope around the for loop, which means all variables are destroyed
    // enclose the function in brackets which declares anonymous function, which is called immediately
    // this is also called an immediately invoked function, which is what the end parentheses are
    (function() {
        for (var x = 0; x < 5; x++) {
            console.log("count# " + x);
        }
    })();               // these parentheses are used to call the function immediately

    // now if you uncomment the below line you get an error because x wont be available
    // return x;
}

outputNumbers2();
