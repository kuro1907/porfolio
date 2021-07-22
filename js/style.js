$(function() {
    var nav = $("nav");
    var navLink = $(".nav-link");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            nav.removeClass('navbar-style').addClass("navbar-style-alt");
        } else {
            nav.removeClass("navbar-style-alt").addClass('navbar-style');
        }
    });
});