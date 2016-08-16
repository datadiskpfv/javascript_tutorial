/**
 * Created by vallep on 8/16/2016.
 */

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// Location Methods

// indexOf = start at front of array
console.log(numbers.indexOf(4));        // indexOf search for ? and print index, search for 4 which is at index 3
console.log(numbers.indexOf(4,4));      // start position 4 (second option) and search for 4 (first position)

// lastIndexOf = start at end of array
console.log(numbers.lastIndexOf(4));        // indexOf search for ? and print index, search for 4 which is at index 3
console.log(numbers.lastIndexOf(4,4));      // start position 4 (second option) and search for 4 (first position)

// Iterative methods

// every runs the given function on every item in the array and returns true if the function returns true for every item
var everyResult = numbers.every(function(item, index, array){
return (item > 2);
});
console.log(everyResult);       // returns false as every item is not greater than 2

// some runs the given function on every item in the array and returns true if the function returns true if some items
var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});
console.log(someResult);       // returns true as some items are greater than 2

// filter runs the given function on every item in the array and returns elements that are filtered as per the function
var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});
console.log(filterResult);       // returns elements that are returned from the function

// map runs the given function on every item in the array and returns the elements
var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});
console.log(mapResult);       // performs the function on each element, returns result

// forEach runs for all elements (no return value)
 numbers.forEach(function(item, index, array){
     console.log(item * 3);
});

// as you can see the original array was never updated
console.log(numbers);

// Reduction methods

var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function(prev, cur, index, array) {
    return prev + cur;
});
console.log(sum);

var sum1 = values.reduceRight(function(prev, cur, index, array){
    return prev + cur;
})
console.log(sum1);