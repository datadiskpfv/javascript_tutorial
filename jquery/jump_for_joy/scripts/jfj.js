/**
 * Created by p on 06/10/2016.
 */

$(document).ready(function() {
    $(".guess_box").click(checkForCode);

    function getRandom(num) {
        var my_num = Math.floor(Math.random() *  num);
        return my_num;
    }

    var hideCode = function() {
        var numRand = getRandom(4);
        $(".guess_box").each(function(index, value) {
            if(numRand == index) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }

    hideCode();

    function checkForCode() {
        var discount;
        // $.contains is same as jquery.contains and checks to see if second element iis a descendant of of this
        if($.contains(this, document.getElementById("has_discount")))
        {
            var my_num = getRandom(5);
            discount = "<p>Your discount is " + my_num + "%</p>";
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $(this).append(discount);
        $(".guess_box").each(function() {
            $(this).unbind("click");
        });
    }
});
