/**
 * Created by pvalle on 19/09/2016.
 */

function checkEmpty(name) {
    if(name.trim().length == "") {
        console.log("Failed empty");
        return true;
    }
    else {
        console.log("Passed empty");
        return false;
    }
}

function checkContainsSpace(name) {
    if(name.trim().indexOf(" ") != -1) {
        console.log("failed spaces");
        return true;
    }
    else {
        console.log("passed spaces");
        return false;
    }
}

function checkFirstLetterNotUppercase(name) {
    if(name.charAt(0) != name.charAt(0).toUpperCase()) {
        console.log("Passed first uppercase letter");
        return false;
    }
    else {
        console.log("Failed first letter uppercase");
        return true;
    }
}
