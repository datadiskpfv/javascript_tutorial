/**
 * Created by pvalle on 20/09/2016.
 */

function inheritPrototype(Driver, Person) {
    var prototype = Object(Person.prototype);            // create object
    prototype.constructor = Driver;                        // argument object
    Driver.prototype = prototype;                          // assign object
}

// this will be the super class
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

// doing the below allows only one copy for all objects created
// notice the constructor parameter, this is required to confirm that Person
// is a Person not a object
Person.prototype = {
    constructor: Person,
    getFirstName: function() { return this.fname; },
    getLastName: function() { return this.lname; },
    getName: function() { return this.fname + " " + this.lname; }
}

// driver will inherit from Person above
function Driver(fname, lname, cabtype) {
    // lets steal the constructor
    Person.call(this, fname, lname);
    this.cabtype = cabtype ;
}

// the below makes sure that the proto for Driver points to Person
Driver.prototype = new Person;
//inheritPrototype(Driver, Person);

// doing the below allows only one copy for all objects created
// below is a different way as above
Driver.prototype.getCabType = function() {
    return this.cabtype;
};

var driver1 = new Driver("Paul", "Valle", "Black Cab");
var driver2 = new Driver("Lorraine", "Valle", "Mini Cab");

console.dir(driver1);
console.dir(driver2);

console.log("driver1 instanceof Object: " + (driver1 instanceof Object).toString());        // true
console.log("driver1 instanceof Person: " + (driver1 instanceof Person).toString());        // true
console.log("driver1 instanceof Driver: " + (driver1 instanceof Driver).toString());        // true

//var mydiv = document.getElementById("mydiv");
//mydiv.innerHTML = driver1.getName() + " drives a " + driver1.getCabType() + "<br>" +
//    driver2.getName() + " drives a " + driver2.getCabType();

// added function to test jasmine
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// left these variable undefined as a test for jasmine
var undef1;
var undef2 = null;
var undef3 = "";

var def1 = true;
var def2 = "Hello World!";

// create a custom Error message
function CustomError(message) {
    //this.name = "CustomError";
    this.message = message
}

// inherit from Error object
CustomError.prototype = new Error();

try {
    throw new CustomError("I have manually thrown a Custom Error")
}
catch (error) {
}