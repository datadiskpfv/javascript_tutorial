/**
 * Created by p on 08/10/2016.
 */

$(document).ready(function() {
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

    lightning_one(4000);
    lightning_two(7000);
    lightning_three(10000);

    $("#head").click(function() {
        if(headclix < 9) {
            headclix += 1;
        }
        else {
            headclix = 0;
        }
    });

    $("#eye").click(function() {
        if(eyeclix < 9) {
            eyeclix += 1;
        }
        else {
            eyeclix = 0;
        }
    });

    $("#nose").click(function() {
        if(nodeclix < 9) {
            noseclix += 1;
        }
        else {
            noseclix = 0;
        }
    });

    $("#mouth").click(function() {
        if(mouthclix < 9) {
            mouthclix += 1;
        }
        else {
            mouthclix = 0;
        }
    });
});

function lightning_one(t) {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one(4000)", t);
};

function lightning_two(t) {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two(7000)", t);
};

function lightning_three(t) {
   $("#container #lightning3").fadeIn("fast").fadeOut("fast");
   setTimeout("lightning_three(10000)", t);
};
