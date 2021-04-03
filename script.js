$().ready(function(){

    $("div").hide();

    $("div").show(1000);

    $("div").slideToggle(1000);

    $("div").slideToggle(1000);

    $("div").fadeOut(1000);

    $("div").fadeIn(2000);

    $("div").animate({height: "250px"}, 1000);

    $("div").animate({height: "150px", marginLeft: "150px"}, 1000);

    $("div").animate({height: "150px", marginLeft: "0px"}, 1000);

    $("div").animate({height: "300px", marginLeft: "90%"}, 1000);

    $("div").animate({height: "150px", marginLeft: "0px"}, 1000);
});