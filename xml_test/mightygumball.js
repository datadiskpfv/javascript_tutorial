/**
 * Created by pvalle on 21/09/2016.
 */

// i have created node-js server to test with
var url = "http://localhost:8001/gumball/sales.json";
var request = new XMLHttpRequest();
request.open("GET", url);

request.onload = function() {
    if (request.status == 200) {
        console.log("Request status: " + request.status);
        console.log("Response text: " + request.responseText);
        alert("Data received!");
        updateSales(request.responseText);
    }
};
request.send(null);

function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
    salesDiv.innerHTML = responseText;
}