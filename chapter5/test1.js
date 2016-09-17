/**
 * Created by vallep on 17/09/2016
 */

// sorting numbers (sorting strings are pretty normal)
var numbers2 = [0, 5, 1, 15, 10, 27, 9, 31, 4];
numbers2.sort();
console.log(numbers2);              // that not right!!!!!!! (because it converts to strings then sorts)

function compare(value1, value2) {
    console.log("comparing " + value1 + " with " + value2);
    return value1 - value2;
}
numbers2.sort(compare);
console.log(numbers2);              // that's better we have used a numerical comparison function
