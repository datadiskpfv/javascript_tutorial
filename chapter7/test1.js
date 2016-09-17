/**
 * Created by vallep on 17/09/2016
 */

var status = true;

function sayHello() {
    console.log("Hello");

    if ( status == true) {
        status = false;
        sayHello();
    }

}

sayHello();
