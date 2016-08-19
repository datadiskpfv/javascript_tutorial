/**
 * Created by vallep on 19/08/2016
 */

var max = Math.max(3, 54, 16, 21, 72, 1);
console.log(max);

var min = Math.min(3, 54, 16, 21, 72, 1);
console.log(min);

// find max/min in array
var values = [3, 54, 16, 21, 72, 1]
console.log(Math.max.apply(Math, values));
console.log(Math.min.apply(Math, values));

// rounding
console.log(Math.ceil(25.9));
console.log(Math.round(25.9));
console.log(Math.round(25.4));          // rounds at .5
console.log(Math.floor(25.9));

// random
console.log(Math.random());                         // random number between 0 to 1
console.log(Math.floor(Math.random() * 10 + 1));    // random number between 1 to 10 (+1 because it starts at 0)

// use select from for random value in array
function selectFrom(lowerValue, upperValue){
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
var colors = ["red", "green", "blue", "black", "white", "brown", "orange"];
console.log(colors[selectFrom(0, colors.length-1)]);




