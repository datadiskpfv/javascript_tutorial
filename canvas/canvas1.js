/**
 * Created by pvalle on 22/09/2016.
 */

// this adds a function to the preview button and also
// generates the tweets drop down list
window.onload = function() {
    var button = document.getElementById("previewButton");
    button.onclick = previewHandler;

    updateTweets(text_tweets);
    makeImage();
};

// this is called by the preview button
function previewHandler() {
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context);
        }
    }

    drawText(canvas, context);
    drawBird(canvas, context)
}

// this draws random squares on the canvas
function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

// this draws random circles on the canvas
function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);
    context.fillStyle = "lightblue";
    context.fill();
}

// this clears the background when you press the preview button
// multiple times
function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// convert degrees to radians
function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

// this updates the drop down tweet lists
function updateTweets(tweets) {
    var tweetsSelection = document.getElementById("tweets");

    for (var i = 0; i < tweets.length; i++) {
        tweet = tweets[i];
        console.log("Tweet: " + tweet);
        var option = document.createElement("option");
        option.text = tweet;
        console.log("tweet: " + option.text.value);
        option.value = tweet.replace("\"", "'");
        tweetsSelection.options.add(option);
    }
    tweetsSelection.selectedIndex = 0;
}

// this draws the tweet on the canvas
function drawText(canvas, context) {
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;
    var fgColor = selectObj[index].value;
    context.fillStyle = fgColor;
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I saw this tweet", 20, 40);

    selectObj = document.getElementById("tweets");
    index = selectObj.selectedIndex;
    var tweet = selectObj[index].value;
    context.font = "italic 1.2em serif";
    context.fillText(tweet, 30, 100);

    context.font = "bold 1em sans-serif";
    context.textAlign = "right";
    context.fillText("and all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
}

// this uploads the tweet bird image onto the canvas
function drawBird(canvas, context) {
    var twitterBird = new Image();
    twitterBird.src = "twitterBird.png";
    twitterBird.onload = function() {
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}

function makeImage() {
    var canvas = document.getElementById("canvas1");
    canvas.onclick = function () {
        window.location = canvas.toDataURL("image/png");
    };
}

// the tweets array
text_tweets = ["Hello World!", "Goodbye World!", "Have a nice day"];
