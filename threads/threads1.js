/**
 * Created by vallep on 25/09/2016
 */

var status = document.getElementById("mydiv1");

if(window["Worker"]) {
    status.innerHTML = "Workers look like they are available"
} else {
    status.innerHTML = "Bummer looks like workers are not available"
}

window.onload = function() {
    var worker = new Worker("worker.js");

    worker.postMessage("ping");

    worker.onmessage = function(event) {
        var message = "Worker says " + event.data;
        document.getElementById("output").innerHTML = message;
    }
}