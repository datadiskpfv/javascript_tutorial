/**
 * Created by vallep on 17/09/2016
 */

// below is know as the module pattern (singleton)

var counter = (function() {
    var privateCounter = 0;

    // this gets called as soon as the variable sayHello is created
    console.log("==========\nHello\n==========");

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

console.log("\n\n - Next test - \n\n");

// we change change the above slight so we can create multiple instances of a module pattern, each instance
// is independent of each other
var makeCounter = function() {
    var privateCounter = 0;

    // this gets called as soon as the variable sayHello is created
    console.log("==========\nHello\n==========");

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        // use a function to get the variable
        increase: function() {
            changeBy(1);
        },
        decrease: function() {
            changeBy(-1);
        },
        // directory return the variable
        display: function() {
            return privateCounter;
        }
    };
};

// the () calls the function immediately
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increase();
counter1.increase();
counter1.increase();
counter2.increase();

console.log("Counter1 : " + counter1.display());
console.log("Counter2 : " + counter2.display());