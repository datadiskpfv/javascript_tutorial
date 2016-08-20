/**
 * Created by vallep on 20/08/2016
 */

/*
 * Factory Pattern
*/

// first we look at the  factory pattern to create objects, this eliminates duplicate code
// factory patterns begin with a lowercase letter
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        return this.name;
    }
    return o;
}

var person1 = createPerson("Paul Valle", 49, "Programmer");
console.log("Your name is " + person1.sayName() + " and you are " + person1.age + " years old");

/*
 * Constructor Pattern
 */

// the factory however did not address the issue of object identification
// using the constructor pattern automatically uses native constructors in Object and Array
// the above can now be rewritten as below
// constructor patterns begin with a capital letter
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        return this.name;
    };
}
// note the new operator which tells this is a constructor (plus capital letter)
var person2 = new Person("Paul Valle", 49, "Programmer");
console.log("Your name is " + person2.sayName() + " and you are " + person2.age + " years old");

console.log(person2 instanceof Object);     // true because it is an object (inherit)
console.log(person2 instanceof Person);     // true because it is an person object

// one thing to remember is that each new object will get its own copy of a function
var person3 = new Person("Lorraine Valle", 44, "Supervisor");
console.log(person3.sayName() == person2.sayName());        // false as functions are different

// to avoid the above problem you can move the function outside of the constructor, then point the constructor
// function to the global function

// this.sayName = sayname;      // point to global function

/*
 * Prototype Pattern
 */
// will leave you to lookup prototype pattern as it is difficult to explain without a diagram, but it means
// that you can use the same functions in different objects of the same object type
function Person1(){
};

Person1.prototype.name = "Paul Valle";
Person1.prototype.age = 49;
Person1.prototype.job = "Programmer";
Person1.prototype.sayName = function() {
    return this.name;
};

var person4 = new Person1();
var person5 = new Person1();

// we are reading from the prototype
console.log(person4.sayName());
console.log(person5.sayName());

// now the functions are the same
console.log(person4.sayName() == person5.sayName());        // now true as functions are the same

//NOTE: any changes to the prototype are reflected to all all instances that use the prototype property values

// to create a new instance of Person1, change one of the properties
person5.name = "Lorraine Valle";
person5.age = 44;


// now we read from the instance property not the prototype property
// the way it works is that javascriot first checks to see if there is a instance property set, if so then return this,
// if not then it checks the prototype for the property and return this value.
console.log(person5.sayName());         // returns the instance property value
console.log(person5.job);               // as we have not set this it returns the prototype property value

// you can use delete to remove the instance property value and repoint back to the prototype property value
delete person5.name;
console.log(person5.sayName());         // now back to prototype property value

// you can check if a property value has its own value or the original prototype value
person5.name = "Lorraine Valle";
console.log(person5.hasOwnProperty("name"));        // true as it has its own property
console.log(person4.hasOwnProperty("name"));        // false as it still points to the original prototype property

// you can use object literal for the above, so it would look like the below
function Person2(){
}

Person2.prototype = {
    name: "Paul Valle",
    age: 49,
    job: "Programmer",
    sayName: function() {
        return this.name;
    }
};

var friend = new Person2();
console.log(friend instanceof Object);          // true
console.log(friend instanceof Person2);         // true
console.log(friend.constructor == Object);      // true
console.log(friend.constructor == Person2);     // false, this does not point to person2 constructor

// use the below if the constructors value is important as you can set it back to the appropriate value
// as below
function Person3(){
}

Person3.prototype = {
    constructor: Person3,           // set the constructor back to the appropriate value
    name: "Paul Valle",
    age: 49,
    job: "Programmer",
    sayName: function() {
        return this.name;
    }
};

var friend1 = new Person3();
console.log(friend1 instanceof Object);          // true
console.log(friend1 instanceof Person3);         // true
console.log(friend1.constructor == Object);      // false, this does not point to Object constructor
console.log(friend1.constructor == Person3);     // now true

// however this sets the constructor property enumerable to true, you can set back to false with the below
// native constructors properties are not enrumerable by default
Object.defineProperty(Person3.prototype, "constructor", {
    enumerable: false,
    value: Person3
});

