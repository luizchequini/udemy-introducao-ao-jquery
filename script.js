$().ready(function(){

    $(".aqua").addClass("mb50");
    $(".aqua").removeClass("mb50");
    $("div").addClass("mb50");
 
    let blue = $(".blue");
    blue.removeClass("blue");

    blue.toggleClass("blue");

    $(".navy").css("background-color", "rgb(128,0,0)");

    $("div").css("height", "150px");

    $("div").css("margin-bottom", "10px");
});