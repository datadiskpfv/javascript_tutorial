/**
 * Created by vallep on 8/14/2016.
 */

// standard ref type creation using new
var person1 = new Object();
person1.name = "Paul";
person1.age = 49;
console.log("Your name is " + person1.name + " and you are " + person1.age + " years old");

// use object literal notation to create ref types
var person2 = {
    name : "Lorraine",
    age : 45
}
console.log("Your name is " + person2.name + " and you are " + person2.age + " years old");

// the last way is to use curly braces to create object, then create the properties
// the above way uses less code.
var person3 = {};
person3.name = "Jessica";
person3.age = 15;
console.log("Your name is " + person3.name + " and you are " + person3.age + " years old");

// you can use object notation to pass large optional arguments to a function
function displayInfo(args) {
    var output = "";

    console.log("typeof: " + typeof args);

    if (typeof args.name == "string"){
        output += "Name: " + args.name;
    }

    if (typeof args.age == "number"){
        output += " Age: " + args.age;
    }

    console.log(output)
}

displayInfo({
    name: "Dominic",
    age: 29
})

displayInfo({
    name: "The Dog"
})

// you can also access properties using [] instead of using dot, but this more typing
var car = {
    make: "Ford",
    model: "C-Max"
}
console.log("You have a " + car["make"] + " " + car["model"]);