/**
 * Created by p on 07/10/2016.
 */

$(document).ready(function() {
    var v = false;
    $("button#vegOn").click(function() {
        if ( v == false) {
          // remove the .fish class but save it in a variable so we can restore later
          $f = $(".fish").parent().parent().detach();

          // lets change hamburgers for portobello mushrooms
          $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");

          // replace meat class with tofu class, insert tofu class then detach the meat class
          $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
          $(".tofu").parent().parent().addClass("veg_leaf");

          $m = $(".meat").detach();
          v = true;
        }
    });

    $("button#restoreMe").click(function() {
        if ( v == true) {
          // restore the fish class
          $(".menu_entrees li").first().before($f);

          // restore the hamburgers by replacing the portobello mushroom
          $(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");

          // restore the meat class
          $(".tofu").each(function(i) {
              $(this).after($m[i]);
          });

          // now we can remove the tofu class and the veg_leaf class
          $(".tofu").parent().parent().removeClass("veg_leaf");
          $(".tofu").remove();
              v = false;
        }
    });
})