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
console.log("\n");

// using exec and global you can search for multiple pattern matches
var text1 = "cat, bat, sat, hat";
var pattern1 = /.at/g;

var matches = pattern1.exec(text1);         // first call to pattern finds the first matched pattern
console.log(matches[0]);
console.log(matches.index);
var matches = pattern1.exec(text1);         // second call to pattern finds the second matched pattern
console.log(matches.index);
console.log(matches[0]);
var matches = pattern1.exec(text1);         // third call to pattern finds the third matched pattern...etc
console.log(matches.index);
console.log(matches[0]);

// you can test if a string matches a specific pattern
var sort_code = "12-34-56";
var sort_code_pattern = /\d{2}-\d{2}-\d{2}/;

if (sort_code_pattern.test(sort_code)) {
    console.log("Sort code is good");
}

// reg-ex has constructor properties, you can use either the left or the right
/*
$_ = input          - the last string matched against
$& = lastMatch      - the last matched text
$+ = lastParen      - the last matched capturing group
$` = leftContext    - the text that appears in the input string prior to lastMatch
$* = multiline      - a boolean value specifying whether all expressions should use multiline mode
$' = rightContext   - the text that appears in the input string after lastMatch
*/

// these are based on that last regular expression used and scoped

var text2 = "this has been a short summer";
var pattern3 = /(.)hort/g;

if (pattern3.test(text2)) {
    console.log(RegExp.input);
    console.log(RegExp.$_);

    console.log(RegExp.leftContext);
    console.log(RegExp["$`"]);

    console.log(RegExp.rightContext);
    console.log(RegExp["$'"]);

    console.log(RegExp.lastMatch);
    console.log(RegExp["$&"]);

    console.log(RegExp.lastParen);
    console.log(RegExp["$+"]);

    console.log(RegExp.multiline);
    console.log(RegExp["$*"]);
}

// lastly you can capture upto 9 pattern groups
var text3 = "this has been a short summer";
var pattern4 = /(....) has (..)en a (.)hort/g;          // dot represents a character

if (pattern4.test(text3)) {
    console.log(RegExp.$1);                             // this
    console.log(RegExp.$2);                             // be
    console.log(RegExp.$3);                             // s
}