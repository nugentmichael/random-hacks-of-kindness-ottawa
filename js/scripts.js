// JavaScript Document

$(document).ready(function() {
	/* Hamburger Button Navigation */
    var menulink = $('.menu-link');
    var nav = $('#menu');
  
    menulink.click(function() {
        nav.toggleClass('active');
        return false;
    });

  /* Flexslider functionality */
  $('.flexslider').flexslider({
    animation: "slide"
  });
});