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
            var my_num = getRandom(100);
            discount = "<p>Your code " + my_num + "%</p>";
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }

        $(".guess_box").each(function() {
            if($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            } else {
                $(this).removeClass("no_discount");
            }
            $(this).unbind("click");
        });
        $(this).append(discount);
    }

    $(".guess_box").hover(
        // handler in
        function() {
            $(this).addClass("my_hover");
        },
        // handler out
        function() {
            $(this).removeClass("my_hover");
        }
    )
});
