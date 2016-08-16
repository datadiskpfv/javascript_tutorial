/**
 * Created by vallep on 8/16/2016.
 */

var reg1 = /cat/g;
console.log(reg1.test("catastrophe"));    // true

var reg2 = /bat/i;
console.log(reg2.test("Batty"));          // true

// when you create a regex object there are properties
// properties: global, ignoreCase, lastIndex, multiline, source
console.log(reg2.ignoreCase);
console.log(reg2.multiline);
console.log(reg2.source);

//