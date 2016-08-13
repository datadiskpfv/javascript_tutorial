/**
 * Created by vallep on 8/13/2016.
 */

var i = 10;

// don't forget the break otherwise it will fallthrough to the next statement
switch(i) {
    case 5:
        console.log("you chose 5");
        break;
    case 10:
        console.log("you chose 10");
        break;
    default:
        console.log("you choose a number but not 5 or 10");
}

// you can also get complex with a switch statement, this one can use strings
switch ("hello world") {
    case "hello" + "world":
        console.log("this one has a missing space, so wont work");
        break;
    case "hello" + " world":
        console.log("this one has a space, so should work");
        break;
    default:
        console.log("other");
}

// here we set the switch to true and use the case to value
var num = 99;
switch (true) {
    case num == 99:
        console.log("99 red balloons");
        break;
    default:
        console.log("other");
}
