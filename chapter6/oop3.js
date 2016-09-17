/**
 * Created by vallep on 20/08/2016
 */

/*
 * Constructor/Prototype combination pattern
 */

// the problem with the prototype pattern is that you cannot pass constructor initialize values,
// so you can combine a constructor with a prototype pattern

// this is widely used in javascript

// create the constructor
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

// Now add the prototype
Person.prototype = {
    constructor: Person,
    sayName: function() {
        return this.name;
    }
}

var person1 = new Person("Paul Valle", 49, "Programmer");
var person2 = new Person("Lorraine Valle", 44, "Supervisor");

console.log(person1.sayName());
console.log(person2.sayName());
console.log(person1.sayName === person2.sayName);       // true, same function

/*
 * Dynamic Prototype
 */

// you can use a dynamic prototype pattern, as below
function Person1(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    // if sayName method does not exist, add it
    if (typeof this.sayName != "function") {
        Person1.prototype.sayName = function() {
            return this.name;
        };
    }
}

var person3 = new Person1("Paul Valle", 49, "Programmer");
console.log(person3.sayName());

/*
 * Parasitic Constructor Pattern
 */

// this pattern is very similar to the factory pattern, you call it using the new operator
function Person2(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        return this.name;
    }
    return o;
}

// notice the new operator which makes this a constructor
var person4 = new Person2("Paul Valle", 49, "Programmer");
console.log("Your name is " + person4.sayName() + " and you are " + person4.age + " years old");

/*
 * Durable constructor pattern
 */

// the durable pattern does not have public properties and does not reference this, you can only access the properties
// via its own
function Person3(name, age, job) {

    // create the object to return
    var o = new Object();

    o.age = age;                // notice no this, assign to object
    o.job = job;                // notice no this,assign to object

    // attach methods
    o.sayName = function() {
    }
    return name;                // notice no this, assign to object

    // return object
    return o;
}

var person5 = new Person3("Paul Valle", 49, "Programmer");
console.log("Your name is " + person5.sayName() + " and you are " + person5.age + " years old");