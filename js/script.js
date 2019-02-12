$(document).ready(function() {

	$('h1').hover(function() {
		$(this).css('background-color', '#FF0000');
	})



/* Scroll on Buttons */ 

  $('.js--scroll-to-music').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-music').offset().top}, 1000); 
    });


   /* Animations on scroll */
     $('.js--wp-1').hover(function(direction) {
        $('.js--wp-1').addClass('animated pulse');
    }, {
        offset: '50%'
    });

       $('.js--wp-2').hover(function(direction) {
        $('.js--wp-2').addClass('animated lightSpeedIn');
    }, {
        offset: '50%'
    });

});
 