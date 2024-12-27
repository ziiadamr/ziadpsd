//nav ui
$(document).ready(function loading() {
    $(".loader").fadeOut(800, function () {
        $("body").css("overflow","auto")
    $(".screenLoading").fadeOut(500, function () {
    })
});
});

$(".nav-link").click(function (eventInfo) { 
    closeIlluDetails();
    closeVideoDetails();
    closePostarzDetails();
   let active = eventInfo.target
    $(".nav-link").removeClass("active");
    $(active).addClass("active");
});

$(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();

    if ($("#illuDetails").hasClass("d-none")&&($("#videoDetails").hasClass("d-none"))
        &&($("#postDetailsDiv").hasClass("d-none"))) {
        $(".nav-link").each(function () {
            var section = $($(this).attr("href"));
            if (section.position().top <= scrollPos + 140) {
                $(".nav-link").removeClass("active");
                $(this).addClass("active");
            }
        });}
});

//Typing
var typed = new Typed('#element', {
    strings: ['VISUAL ARTIST', 'CONTENT CREATOR', 'FREELANCER',
                'WEB DEVELOPER'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
  });

$("#illuMore").click(function(){
    $(".moreDiv").removeClass("d-none bounceOutDown").addClass("wow bounceInUp").show();// Use show() to ensure visibility
    $(".moreDiv").css("opacity","1");
    new WOW().init();
    $("#illuMore").addClass("d-none")
    $("#illuLess").removeClass("d-none")
})
$("#illuLess").click(function(){
    $(".moreDiv").removeClass("bounceInUp").addClass("d-none wow bounceOutDown").delay(400).hide(0); // Delay to allow animation
    $(".moreDiv").css("opacity","0");
    new WOW().init(); 
    $("#illuMore").removeClass("d-none")
    $("#illuLess").addClass("d-none")
})
new WOW().init();
$("#showMoreVideos").click(function(){
    $(".moreVideos").removeClass("d-none bounceOutDown").addClass("wow bounceInUp").show();// Use show() to ensure visibility
    $(".moreVideos").css("opacity","1");
    new WOW().init();
    $("#showMoreVideos").addClass("d-none")
    $("#showLessVideos").removeClass("d-none")
})
$("#showLessVideos").click(function(){
    $(".moreVideos").removeClass("bounceInUp").addClass("d-none wow bounceOutDown").delay(400).hide(0); // Delay to allow animation
    $(".moreVideos").css("opacity","0");
    new WOW().init(); 
    $("#showMoreVideos").removeClass("d-none")
    $("#showLessVideos").addClass("d-none")
})

$("#morePost").click(function(){
    $(".morePost").removeClass("d-none bounceOutDown").addClass("wow bounceInUp").show();// Use show() to ensure visibility
    $(".morePost").css("opacity","1");
    new WOW().init();
    $("#morePost").addClass("d-none")
    $("#lessPost").removeClass("d-none")
})

$("#lessPost").click(function(){
    $(".morePost").removeClass("bounceInUp").addClass("d-none wow bounceOutDown").delay(400).hide(0); // Delay to allow animation
    $(".morePost").css("opacity","0");
    new WOW().init(); 
    $("#morePost").removeClass("d-none")
    $("#lessPost").addClass("d-none")
})
//dtails of illu
var scrollPos=0;
$(".viewDetailOne").click(function(){
    scrollPos = $(window).scrollTop();
    $("#website").addClass("d-none");
    $("#illuDetails").removeClass("d-none");
});
function closeIlluDetails(){
    $("#illuDetails").addClass("d-none");
    $("#website").removeClass("d-none");
    $(window).scrollTop(scrollPos);
}
$(".close").click(function(){
    closeIlluDetails();

})
$(document).keydown(function(event) {
    if (event.key === "Escape") {
        closeIlluDetails();
    }
});

//

var scrollPosVideo=0;
$(".viewVideoDetails").click(function(){
    scrollPosVideo = $(window).scrollTop();
    $("#website").addClass("d-none");
    $("#videoDetails").removeClass("d-none");
});
function closeVideoDetails(){
    $("#videoDetails").addClass("d-none");
    $("#website").removeClass("d-none");
    $(window).scrollTop(scrollPosVideo);
}
$("#closeVideo").click(function(){
    closeVideoDetails();

})
$(document).keydown(function(event) {
    if (event.key === "Escape") {
        closeVideoDetails();
    }
});


var scrollpostarz=0;
$(".postarzDetails").click(function(){
    scrollpostarz = $(window).scrollTop();
    $("#website").addClass("d-none");
    $("#postDetailsDiv").removeClass("d-none");
});
function closePostarzDetails(){
    $("#postDetailsDiv").addClass("d-none");
    $("#website").removeClass("d-none");
    $(window).scrollTop(scrollpostarz);
}
$("#closePostarz").click(function(){
    closePostarzDetails();

})
$(document).keydown(function(event) {
    if (event.key === "Escape") {
        closePostarzDetails();
    }
});