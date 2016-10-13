//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top >= 20) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        //$(".logo").addClass("logo-invert");
        $('.logo').css({"width":"80%","-webkit-transition": "all 300ms ease-in-out", "transition": "all 300ms ease-in-out"});
        $('ul.nav.navbar-nav.navbar-right li a').css({"color":"#98B8C4"});
        $('ul.nav.navbar-nav.navbar-right li a.selected').css({"color":"#333"});
        //console.log($('#logo'));
        $('.logo').attr('src','img/sur-logo-color.png');
        $('.navbar-default .navbar-toggle').css({"border-color":"#98B8C4"});
        $('.navbar-default .navbar-toggle .icon-bar').css({"background-color":"#98B8C4"});
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //$(".logo").removeClass("logo-invert");
        $('.logo').css({"width":"100%", "-webkit-transition": "all 300ms ease-in-out", "transition": "all 300ms ease-in-out"});
        $('ul.nav.navbar-nav.navbar-right li a').css({"color":"#fff"});
        $('ul.nav.navbar-nav.navbar-right li a.selected').css({"color":"#333"});
        $('.logo').attr('src','img/sur-logo-white.png');
        $('.navbar-default .navbar-toggle').css({"border-color": "#FFF"});
        $('.navbar-default .navbar-toggle .icon-bar').css({"background-color": "#FFF"});
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.
                attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
