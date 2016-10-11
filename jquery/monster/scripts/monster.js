/**
 * Created by p on 08/10/2016.
 */

$(document).ready(function() {
    // holds the picture picture position 0-8, 9 starts back at 0
    var clix = [0, 0, 0, 0];  // head, eyes, nose, mouth

    $("#head").click(function() {
       moveMe(0, this);
    });

    $("#eyes").click(function() {
       moveMe(1, this);
    });

    $("#nose").click(function() {
        moveMe(2, this);
    });

    $("#mouth").click(function() {
        moveMe(3, this);
    });

    function moveMe(i, obj) {
        if(clix[i] < 9) {
            $(obj).animate({left:"-=367px"}, 500);
            clix[i] += 1;
        }
        else {
            $(obj).animate({left:"0px"}, 500);
            clix[i] = 0;
        }
    }
});

goLightning();
window.onblur = stopLightning;
window.onfocus = goLightning;

var int1, int2, int3;

function goLightning() {

    intl1 = setInterval( function() {
        lightning_one();
    }, 4000);

    intl2 = setInterval( function() {
        lightning_two();
    }, 7000);

    intl3 = setInterval( function() {
        lightning_three();
    }, 10000);
}

function stopLightning() {
    window.clearInterval(int1);
    window.clearInterval(int2);
    window.clearInterval(int3);
}

function lightning_one() {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
};

function lightning_two() {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
};

function lightning_three() {
   $("#container #lightning3").fadeIn("fast").fadeOut("fast");
};