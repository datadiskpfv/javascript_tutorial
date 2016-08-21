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