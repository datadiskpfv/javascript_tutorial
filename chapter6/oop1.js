/**
 * Created by vallep on 20/08/2016
 */

//"use strict";

// objects in javascript are really hash tables, nothing more than a grouping of name-value pairs where
// the value may be data or a function

// to create a simple object use new and assign properties to the object
var person = new Object();
person.name = "Paul Valle";                     // assign a property
person.age = 49;                                // assign a property
person.sayName = function() {                   // assign a function
    return person.name;
}
console.log("Your name is " + person.sayName() + " and you are " + person.age + " years old");

// you could have rewritten above using object literal notation
var person2 = {
    name: "Paul Valle",
    age: 49,

    sayName: function() {
        return this.name
    }
};
console.log("Your name is " + person2.sayName() + " and you are " + person2.age + " years old");

// data properties contain a single location for a data value, values are read and written to this location
// data properties have four attributes describing their behavior
// [[Configurable]]  - indicates if property may be redefined by removing the property via delete, changing the properties attributes
//                   - or changing the property into an accessor property
// [[Enumerable]]    - indicates if the property will be returned in a for-in loop
// [[Writable]]      - indicates if the property's value can be changed
// [[Value]]         - contains actual data value for the property

// by default a property is Configurable, Enumerable and Writable (attribute is set to true)

// to change a property you can use the defineProperty() method
var person3 = {};
Object.defineProperty(person3, "name",{
    writable: false,
    configurable: false,
    value: "Paul Valle"
});
console.log(person3.name);

// notice when we change the name we get no error, the command is just ignored
// using "use strict" will detect errors like this
person3.name = "Lorraine Valle";            // this is ignored
console.log(person3.name);

// you cannot delete the property if configurable is false
// using "use strict" will detect errors like this
// once a property configurable is set to false you cannot set back to true, this will cause an error
delete person3.name;                        // this is ignored
console.log(person3.name);

// accessor properties do not contain a data value, they contain a combination of a setter (setting value) and
// getter (getting value) functions.

// Accessor properties have four attributes
// [[Configurable]]  - indicates if property may be redefined by removing the property via delete, changing the properties attributes
//                   - or changing the property into an accessor property
// [[Enumerable]]    - indicates if the property will be returned in a for-in loop
// [[Get]]           - the function to call when the property is read from
// [[Set]]           - the function to call when the property is written to.
var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, "year", {
    get: function(){
        return this._year
    },
    set: function(newValue){
        if (newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;        // 1 + 2015 - 2004
        }
    }
});

book.year = 2015;
console.log(book.edition);          // 12
