/**
 * Created by vallep on 8/13/2016.
 */

// scopes for blocks are not used, here 5 is added to num1, also we create a num2
// which is still available after the if statement

var num1 = 5;
if ( num1 > 4 ) {
    num1 = num1 + 5;
    num2 = num1;
}
console.log("num1: " + num1);
console.log("num2: " + num2);

// the for has affected the gloabl i, even through i specified var in for loop
var i = 0;
for (var i=0; i < 5; i++) {
    console.log("for loop i " + i.toString());
}
console.log("global i: " + i.toString());

// functions are different see notice global num2 is unaffected, remember the pass by value for
// primivate types (see functions2.js)
var num2 = 0;
function test(num2) {
    num2 = num2 + 10;
    console.log("num inside function: " + num2)
}
console.log("global num2: " + num2.toString());