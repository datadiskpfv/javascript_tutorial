/**
 * Created by vallep on 20/08/2016
 */

/*
 * Prototype chaining
 */

// javascript does not do interface inheritance, you can only do implementation inheritance via prototype chaining

// we first create two types SuperType and SubType
function SuperType() {
    this.property = "This is SuperType property";
}

function SubType() {
    this.subproperty = "This is SubType property";
}

// we then create a function in the SuperType called getSuperValue, basically return the property value
SuperType.prototype.getSuperValue = function() {
    return this.property;
}

// Now we assign the SuperType to the SubType, which means SubType inherits all SuperType's functions
SubType.prototype = new SuperType();

// We create function in SubType to get the SubType property
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

// create an SubType instance, but call the inherited getSuperValue function from SuperType
var instance = new SubType();
console.log(instance.getSuperValue());          // call the inherited getSuperValue function
console.log(instance.getSubValue());



// the relationship is that instance is an instanceof Object, SuperType and SubType
console.log(instance instanceof Object);            // true
console.log(instance instanceof SuperType);         // true
console.log(instance instanceof SubType);           // true

// you can override existing SuperType function
SubType.prototype.getSuperValue  = function() {
    return "Overriding getSuperValue function";
}

console.log(instance.getSuperValue());          // javascript will look down the chain and find the SubValue function first

console.log("SuperType proto: " + SuperType.__proto__);
console.log("SubType proto: " + SubType.__proto__);
// NOTE: you cannot use object literal when prototype chaining as you will overwrite the chain

/*
 * Constructor Stealing
 */

// Instead of using the prototype you can use a technique called constructor stealing, which basically calls the
// supertype constructor within the subtype constructor
function SuperType1(color) {                          // We can pass arguments
    this.colors = ["red", "blue", "green"];
    this.colors.push(color);                          // and use the passed arguments
}

function SubType1() {
    SuperType1.call(this, "Yellow");                  // inherit from SuperType, you can also pass arguments
}

var instance1 = new SubType1();
instance1.colors.push("black");
console.log(instance1.colors);
console.log("SuperType1 proto: " + SuperType1.__proto__);
console.log("SubType1 proto: " + SubType1.__proto__);

/*
 * Combination Inheritance
 */

// this addresses issues with other inheritance constructors and therefore is commonly used in javascript
function SuperType2(name) {
    this.name = name;
    this.colors = ["red", "green", "blue"];
}

SuperType2.prototype.sayName = function() {
    return this.name;
};

function SubType2(name, age){
    SuperType2.call(this, name);

    this.age = age;
}

SubType2.prototype = new SuperType2;

SubType2.prototype.sayAge = function() {
    return this.age;
};

var instance2 = new SubType2("Paul Valle", 49);
instance2.colors.push("black");
console.log(instance2.sayName() + " age: " + instance2.age);
console.log(instance2.colors);
console.log("SuperType2 proto: " + SuperType2.__proto__.__proto__);
console.log("SubType2 proto: " + SubType2.__proto__.__proto__);