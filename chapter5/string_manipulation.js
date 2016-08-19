/**
 * Created by vallep on 19/08/2016
 */


// concatenation
var string1 = "hello";
var string2 = " world"
var result = string1.concat(string2 + "!");
console.log(result);

// with one argument - start position to end of string
console.log(result.slice(3));
console.log(result.substring(3));
console.log(result.substr(3));

// with two arguments - start postion and
console.log(result.slice(3, 7));            // start and end position but dont include end position
console.log(result.substring(3, 7));        // start and end position but dont include end position
console.log(result.substr(3, 7));           // start and finish position

// see description below
console.log(result.slice(-3));              // start at end of string
console.log(result.substring(-3));          // negative numbers are converted to zero
console.log(result.substr(-3));             // length of string plus the number

// string location
console.log(result.indexOf("e"));           // e is in position 1
console.log(result.lastIndexOf("o"));       // last o is in position 7, starts at the last character works to front

// you can provide a starting position for above
console.log(result.indexOf("e", 6));           // could not find another e -1
console.log(result.lastIndexOf("o", 6));       // starts at position 6 and works back to start

// remove whitespaces, only at beginning and end
var whitespaces1 = "     Hello   ";
var whitespaces2 = "     Hello   !";
console.log(whitespaces1.trim());
console.log(whitespaces2.trim());               // notice it does not remove all whitespaces in sentence

// there are case methods, there is also locale ones as well
var case1 = "Hello World";
console.log(case1.toUpperCase());
console.log(case1.toLowerCase());

// string replacements
var text = "cat, bat, sat, hat";
var result1 = text.replace("at", "ond");        // will only replace first occurrence
console.log(result1);
var result2 = text.replace(/at/g, "ond");       // will globally replace all
console.log(result2);