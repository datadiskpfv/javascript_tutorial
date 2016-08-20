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
console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

// you can override existing SuperType function
SubType.prototype.getSuperValue  = function() {
    return "Overriding getSuperValue function";
}

console.log(instance.getSuperValue());          // javascript will look down the chain and find the SubValue function first

// NOTE: you cannot use object literal when prototype chaining as you will overwrite the chain

