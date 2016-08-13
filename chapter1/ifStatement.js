/**
 * Created by vallep on 8/13/2016.
 */

age = 40;

// you can use one liners
if ( age > 39)
    console.log("you are older than 39\n");

// for multiple lines use curly brackets
if ( age > 39) {
    console.log("you are older than 39");
    console.log("Don't worry life begins at 40\n");
}

age = 25;
if ( age > 39) {
    console.log("you are older than 39");
    console.log("Don't worry life begins at 40");
}
else {
    console.log("you are younger than 39");
    console.log("you have many years ahead of you\n");
}

age = 25;
if ( age > 39) {
    console.log("you are older than 39");
}
else if ( age > 16 ){
    console.log("you are older than 16");
}
else {
    console.log("should you not be in school!!");
}