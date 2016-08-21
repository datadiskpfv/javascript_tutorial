/**
 * Created by vallep on 21/08/2016
 */

/*
 * Parasitic Inheritance
 */

// basically create a function that does the inheritance, arguments the object in some way and then returns the object
function createAnother(original) {
    var clone = Object(original);
    clone.sayHi = function() {
        return "Hi";
    };
    return clone;
}

var person1 = {
    name: "Paul Valle",
    hobbies: ["Programming", "Fishing", "Football"]
};

var anotherPerson = createAnother((person1));
console.log(anotherPerson.sayHi());

/*
 * Parasitic Combination Inheritance
 */

// lastly we have parasitic combination inheritance which is considered the most optimal inheritance paradigm
// for reference types

function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype);            // create object
    prototype.constructor = subType;                        // argument object
    subType.prototype = prototype;                          // assign object
}

function SuperType(name){
    this.name = name;
    this.colors = ["red", "green", "blue"];
}

SuperType.prototype.sayName = function() {
    return "Paul Valle";
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    return this.age;
}


var instance1 = new SubType("Paul Valle", 49);
instance1.colors.push("black");

console.log("Name: " + instance1.sayName() + " Age: " + instance1.sayAge());

console.log(instance1 instanceof Object);           // true
console.log(instance1 instanceof SuperType);        // true
console.log(instance1 instanceof SubType);          // true

console.log(Object.prototype.isPrototypeOf(instance1));        // true
console.log(SuperType.prototype.isPrototypeOf(instance1));     // true
console.log(SubType.prototype.isPrototypeOf(instance1));       // true
