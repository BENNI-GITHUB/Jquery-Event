$(document).ready(function () {
    $("#stream1_btn").click(function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
    $("p").click(function (){
        $("p").css("color", "red");
    });
    $("p").mouseleave(function (){
        $("p").css("color", "initial");
    });
    $("h2").mouseenter(function(){
        $("h2").css("background", "lightblue")
    });
    $("h2").mouseleave(function (){
        $("h2").css("background", "initial");
    });
    $("h2").mouseenter(function (){
        $("h2:hover").css("font-size", "large")
    });
    $("h2").mouseleave(function () {
        $("h2").css("font-size", "initial");
    });
    $("a").mouseenter(function(){
        $("body").css("background", "black");
    });
    $("a").mouseout(function () {
        $("body").css("background", "grey");
    });
}); 


/** 
Inside your script.js file, add a click event which will trigger when a <p> tag is clicked and will change the color of all <p> tags to red.
When a <h2> is hovered over, the background of all <h2>s are changed to the colour lightblue.
When a <h2> is hovered over its font size increases, but only for that particular <h2>
When a button is hovered, the background color of the page turns black.
When a button is no longer hovered, the background color of the page turns grey.*/
