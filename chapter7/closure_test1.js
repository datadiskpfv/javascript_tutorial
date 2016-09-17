/**
 * Created by vallep on 17/09/2016
 */

// just creating the closure imediately calls it
var sayHello = (function() {
    var test_var = "goodbye";

    // this gets called as soon as the variable sayHello is created
    console.log("Hello");

    function displayTestVar() {
        return test_var;
    }
    return {
        // use a function to get the variable
        displayTV: function() {
            return displayTestVar();
        },
        // directory return the variable
        display: function() {
            return test_var;
        }
    };
})();           // the () means execute immediately

console.log(sayHello.displayTV());
console.log(sayHello.display());


