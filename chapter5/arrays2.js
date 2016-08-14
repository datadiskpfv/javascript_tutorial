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

