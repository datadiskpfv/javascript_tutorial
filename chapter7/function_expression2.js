/**
 * Created by vallep on 25/08/2016
 */

/*
 * private variables
 */

// javascript has no concept of private variables, all object properties are public.
// to use a private concept we can use the below
function MyObject(){

    // private variables and function
    var privateVariable = 10;

    function privateFunction() {
        return privateVariable;
    }

    // privilege methods
    this.publicMethod = function (){
        privateVariable++;
        return privateFunction();
    }
}

var obj1 = new MyObject();
console.log(obj1.publicMethod());
console.log(obj1.privateVariable);              // privateVariable not accessible - undefined
console.log(MyObject.privateVariable);          // privateVariable not accessible - undefined

/*
 * static private variables, is the same above but use enclose using parenthese
 */

(function () {

        var name = "";                                      // private variable but each instance has its own

        Person = function(value) {
            name = value;
        };

        Person.prototype.getName = function(){              // using prototype means you can use the same method for all instances
            return name;
        };

        Person.prototype.setName = function (value) {
            name = value;
        };
})();

var person1 = new Person("Paul");
console.log(person1.getName());
person1.setName("Lorraine");
console.log(person1.getName());

/*
 * Module pattern (used for singletons)
 */

//normally singletons are created as below

/*
  var singleton1 = {
    name: value,
    method: function () {
        // method code here
    }
  };
*/

// the module pattern is as below
var singleton = function() {

    // private variables and functions
    var privateVariable2 = 10;

    function privateFunction2() {
        return privateVariable2;
    }

    // return public variables and functions
    return {
        publicProperty: true,
        publicMethod: function (){
            privateVariable2++;
            return privateFunction2();
        }
    };
}();

console.log(singleton.publicMethod());          // we can access public methods
console.log(singleton.publicProperty);          // we can access public variables

/*
 * module-argumentation pattern
 */
var singleton2 = function() {
    var privateVariable3 = 10;

    function privateFunction3() {
        return privateVariable3;
    }

    var object = new Object();

    object.publicProperty = true;

    object.publicMethod = function () {
        privateVariable3++;
        return privateFunction3();
    }

    return object;
}();

console.log(singleton2.publicMethod());          // we can access public methods
console.log(singleton2.publicProperty);          // we can access public variables
// console.log(singleton2.privateFunction3());   // won't run as private function is not accessible