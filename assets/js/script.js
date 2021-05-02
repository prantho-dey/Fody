(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('.primary-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanScreenWidth: "991",
		meanRevealPosition: "right",
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	/*------------------------------------
        Isotop Gallery
	--------------------------------------*/
	var $grid = $('.isotop').isotope({
		itemSelector: '.single-item',
		percentPosition: true,
		masonry: {
		  columnWidth: 1
		}
	  })
	  $('.isotope-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });
  
		// change is-checked class on buttons
	  $('.isotope-button').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.design').removeClass('design');
		  $( this ).addClass('design');
		});
	  });


})(jQuery);
