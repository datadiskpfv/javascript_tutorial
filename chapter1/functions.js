/**
 * Created by vallep on 8/13/2016.
 */

// very basic function
function sayHello() {
    console.log("Hello");
}

sayHello();

// pass some parameters, a string and a integer
function whoAreYou(name, age) {
    console.log("Your name is " + name + " and you are " + age + " years old");
}

whoAreYou("Paul", 49);

// return a value
function volume( heigth, width, depth) {
  return heigth * width * depth;
}
console.log( "Area is: " + volume(2, 2, 2));

// return before code is executed
function test() {
    console.log("this is printed");
    return;
    console.log("this is not printed");
}
test();

// you dont have to specify the arguements and thus can use the arguments object
// basically functions don't have signatures so NO overloading
function test2() {
    process.stdout.write("All the arguments: ");
    console.log(arguments.valueOf());
    console.log("The first arguement: " + arguments[0]);
    console.log("The second arguement: " + arguments[1]);
    console.log("The third arguement: " + arguments[2]);
    console.log("There are " + arguments.length + " elements");
}
test2("one", "two", "three");