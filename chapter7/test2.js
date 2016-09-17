/**
 * Created by vallep on 17/09/2016
 */

function displayArguments() {

    console.log("Number of arguments: " + arguments.length);

    console.log("Calling function: " + arguments.callee);

    for(i = 0; i < arguments.length; i++) {
        console.log("Argument " + (i + 1) + " : " + arguments[i]);
    }
}

displayArguments(1, 2, 3,4 , 5);
