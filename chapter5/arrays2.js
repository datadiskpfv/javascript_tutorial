/**
 * Created by vallep on 8/14/2016.
 */

// stack (using push and pop)
var colors = ["red", "blue", "green"];
console.log(colors);

colors.push("yellow");      // add element to end of array
console.log(colors);

var item = colors.pop();    // pop element from end of array
console.log(colors);
console.log(item);

// queue (using push and shift)
var colors2 = ["red", "blue", "green"];

colors2.push("purple");      // add element to end of array
console.log(colors2);

var item2 = colors2.shift();    // pop element from end of array
console.log(colors2);
console.log(item2);

// reverse an array
var numbers1 = [1, 2, 3, 4, 5];
numbers1.reverse();
console.log(numbers1);

// sorting numbers (sorting strings are pretty normal)
var numbers2 = [0, 5, 1, 15, 10];
numbers2.sort();
console.log(numbers2);              // that not right!!!!!!! (because it converts to strings then sorts)

function compare(value1, value2) {
    return value1 - value2;
}
numbers2.sort(compare);
console.log(numbers2);              // thats better we have used a numerical comparison function

// you can concat arrays
var sport1 = ["football", "ruby", "cricket"];
var sport2 = sport1.concat();
console.log(sport2);
console.log(typeof sport2);

// you can use slice to carve-out elements in an array
var sport3 = ["football", "ruby", "cricket", "darts", "snooker"];
var sport4 = sport3.slice(1,3);           // start position, end position but does not include end position
var sport5 = sport3.slice(2);             // start position then to end of array
var sport6 = sport3.slice(-2, -1)         // you start from end of array use negative numbers
var sport7 = sport3.slice(-2)         // last two items
console.log(sport4);
console.log(sport5);
console.log(sport6);
console.log(sport7);

// you can use splice for deletion, insertion and replacement
var removed = sport3.splice(0,1);        // remove the first item
console.log(removed);
console.log(sport3);

removed = sport3.splice(0, 1, "tennis", "golf");    // remove 1st element, then add elements
console.log(sport3);