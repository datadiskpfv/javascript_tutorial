/**
 * Created by pvalle on 21/09/2016.
 */

window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        var watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        var clearWatchButton = document.getElementById("clearWatch");
        clearWatchButton.onclick = clearWatch;
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";

    if (map == null) {
        showMap(latitude, longitude);
    }
   else {
        scrollMapToPosition(latitude, longitude);
    }
}

function displayError(error) {
    var errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    var Radius = 6371; // radius of the Earth in km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) *
            Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI)/180;
    return radians;
}

var ourCoords = {
    latitude: 47.624851,
    longitude: -122.52099
};

var orbCoords = {
    latitude: 51.516912,
    longitude: -0.08379
};

var map;

function showMap(latitude, longitude) {

    var googleLatAndLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        // going to code orb coords as working on PC (no GPS)
        center: new google.maps.LatLng(51.516912, -0.08345),
        //center: new google.maps.LatLng(latitude, longitude),
        zoom: 15,
        // Map types: HYBRID ROADMAP SATELLITE TERRAIN
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, mapOptions);

    var title = "Your Location";
    var content = "You are here: " + latitude + ", " + longitude;
    addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        content: content,
        position: latlong
    };
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker, "click", function() {infoWindow.open(map);});
}

var watchId = null;
function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation,
        displayError);
}

function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function scrollMapToPosition(latitude, longitude) {
    var latitude = latitude;
    var longitude = longitude;
    var latlong = new google.maps.LatLng(latitude, longitude);
    map.panTo(latlong);
    addMarker(map, latlong, "Your new location", "You moved to: " +
        latitude + ", " + longitude);
}

