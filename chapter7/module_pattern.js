/**
 * Created by vallep on 17/09/2016
 */

// below is know as the module pattern, if you create multiple instances each one will be dependant

// just creating the closure immediately calls it
var makeCounter = (function() {
    var privateCounter = 0;

    // this gets called as soon as the variable sayHello is created
    console.log("Hello");

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
})();           // the () means execute immediately

makeCounter.increase();
console.log(makeCounter.display());
makeCounter.decrease();
console.log(makeCounter.display());