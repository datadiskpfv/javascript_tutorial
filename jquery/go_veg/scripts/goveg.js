/**
 * Created by p on 07/10/2016.
 */

$(document).ready(function() {
    var v = false;
    $("button#vegOn").click(function() {
        if ( v == false) {
            v = true;
        }
        $f = $(".fish").parent().parent().detach();
        alert(JSON.stringify($f[0]));
    });

    $("button#restoreMe").click(function() {
        if ( v == true) {
            v = false;
        }
    });
})
