/**
 * Created by vallep on 24/09/2016
 */

localStorage.setItem("sticky_0", "Hello World");
localStorage.setItem("sticky_1", "Goodbye World");

var sticky0 = localStorage.getItem("sticky_0");
var sticky1 = localStorage.getItem("sticky_1");

alert(sticky0);
alert(sticky1);

// you cannot storage numbers as numbers, you have to store as a string
// then convert
localStorage.setItem("sticky_2", 5);
var sticky2 = parseInt(localStorage.getItem("sticky_2"));
alert(sticky2);

// we can store floats as well (as a string)
localStorage.setItem("sticky_3", 9.99);
var sticky3 = parseFloat(localStorage.getItem("sticky_3"));
alert(sticky3);

// we can also an associate array
localStorage["sticky_4"] = "sticky 4";
localStorage["sticky_5"] = "sticky 5";
alert(localStorage["sticky_4"]);
alert(localStorage["sticky_5"]);

// get the localstorage length
alert("Store Length: " + localStorage.length);

// storing json
array1 = ["Paul Valle", "Lorraine Valle", "Dominic Valle", "Jessica Valle"];
localStorage.setItem("Names", JSON.stringify(array1));
array2 = JSON.parse(localStorage.getItem("Names"));
alert(array2);

// to remove a storage item use below, check dev tools to see that sticky_0 is removed
localStorage.removeItem("sticky_0");

// store an javascript object
paul_age = {
    name: "Paul",
    age: 48
}

lorraine_age = {
    name: "Lorraine",
    age: 44
}

localStorage.setItem("single_object", JSON.stringify(paul_age));

array_ages = [paul_age, lorraine_age];
localStorage.setItem("ages", JSON.stringify(array_ages));

// to catch errors just use a try/catch block



