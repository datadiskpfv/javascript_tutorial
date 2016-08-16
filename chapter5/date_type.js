/**
 * Created by vallep on 8/16/2016.
 */

var someDate = new Date("July 30, 1994");
console.log(someDate);

var y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);

var y2k_2 = new Date(2000, 0);
console.log(y2k_2);

var allFives = new Date(Date.UTC(2000, 1, 2, 3, 4, 5));
console.log(allFives);

var allFives_2 = new Date(2000, 1, 2, 3, 4, 5);
console.log(allFives_2);

// returns milliseconds
var start = Date.now();
var count = 1;
while (count < 100000000){
    count++;
}
var stop = Date.now();
var result = stop - start;
console.log(start);
console.log(stop);
console.log(result);

// lots of date/time component methods (gets/sets), few examples below
var d = new Date();
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getDay());