/**
 * Created by pvalle on 12/10/2016.
 */

function getXMLRacers() {
    // use ajax jquery utility
    $.ajax({
        url: "finishers.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            // perform some clearing up
            $('#finishers_m').empty();
            $('#finishers_f').empty();
            $('#finishers_all').empty();

            // loop through the xml elements and perform some searches (use find)
            $(xml).find("runner").each(function () {
                var info = '<li>Name:' + $(this).find("fname").text() + ' ' + $(this).find("lname").text() +
                    ' Time: ' + $(this).find("time").text() + '</li>';

                if ($(this).find("gender").text() == "m") {
                    $('#finishers_m').append(info);
                } else if ($(this).find("gender").text() == "f") {
                    $('#finishers_f').append(info);
                } else {
                }
                $('#finishers_all').append(info);
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

// below means 10 seconds when used with a timer
var FREQ = 10000;

// below is shortcut for $(document).ready
$(function() {

    var repeat = true;

    // us a timer to poll every 10 seconds and update if necessary
    function startAJAXcalls() {
        if(repeat) {
            setTimeout(function () {
                getDBRacers();
                startAJAXcalls();
                showFrequency();
                getTimeAjax();
            }, FREQ);
        }
    }

    $('#btnStop').click(function() {
        repeat = false;
        $("#freq").html("Updates paused!!!");
    });

    $('#btnStart').click(function() {
        repeat = true;
        startAJAXcalls();
        showFrequency();
        getTimeAjax();
    })

    // get the whole thing started
    getDBRacers();
    startAJAXcalls();
});

function getDBRacers() {
    $.getJSON("http://localhost:8080/service.php?action=getRunners", function(json) {
        if (json.runners.length > 0) {
            $('#finishers_m').empty();
            $('#finishers_f').empty();
            $('#finishers_all').empty();

            $.each(json.runners, function() {
                var info = '<li>Name:' + this['fname'] + ' ' + this['lname'] +
                    ' Time: ' + this['time'] + '</li>';

                if (this['gender'] == "m") {
                    $('#finishers_m').append(info);
                } else if (this['gender'] == "f") {
                    $('#finishers_f').append(info);
                } else {
                }
                $('#finishers_all').append(info);
            });
        }
    });
}

function showFrequency() {
    $("#freq").html("Page refreshes every " + FREQ/1000 + " second(s)");
}

function getTimeAjax() {
    $('#updatedTime').load("http://localhost:8080/date_time.php")
}



$('#btnSave').click(function() {

    var data = $("#addRunner :input").serializeArray();

    $.post($("#addRunner").attr('action'), data, function(json){

        if (json.status == "fail") {
            alert(json.message);
        }
        if (json.status == "success") {
            alert(json.message);
            clearInputs();
        }
    }, "json");

});

function clearInputs(){
    $("#addRunner :input").each(function() {
        $(this).val('');
    })
}

$("#addRunner").submit(function(){
    //return false;
});